/* src/pages/Community.jsx */
import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
import { Heart, MessageSquare, Plus, Share2, Tag, Check, Award } from 'lucide-react';
import '../styles/global.css';

export const Community = () => {
  const { posts, addPost, likePost, addCommentToPost, votePoll, user } = useContext(AppContext);
  const [activeCategory, setActiveCategory] = useState('All');
  const [showCreateModal, setShowCreateModal] = useState(false);
  
  // Create Post Form State
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [category, setCategory] = useState('Discussion');
  const [hasPoll, setHasPoll] = useState(false);
  const [pollQuestion, setPollQuestion] = useState('');
  const [pollOptions, setPollOptions] = useState(['', '']);

  // Active Comment Input per Post
  const [commentInputs, setCommentInputs] = useState({});

  const categories = ['All', 'Atmosphere', 'Water Quality', 'Deforestation', 'Plastic Waste', 'Discussion'];

  const filteredPosts = activeCategory === 'All' 
    ? posts 
    : posts.filter(p => p.category === activeCategory);

  const handleCreatePost = (e) => {
    e.preventDefault();
    if (!title.trim() || !content.trim()) return;

    const filteredOptions = pollOptions.filter(opt => opt.trim() !== '');

    addPost({
      title,
      content,
      category,
      pollQuestion: hasPoll ? pollQuestion : null,
      pollOptions: hasPoll ? filteredOptions : null
    });

    // Reset Form
    setTitle('');
    setContent('');
    setCategory('Discussion');
    setHasPoll(false);
    setPollQuestion('');
    setPollOptions(['', '']);
    setShowCreateModal(false);
  };

  const handleAddPollOption = () => {
    if (pollOptions.length < 5) {
      setPollOptions([...pollOptions, '']);
    }
  };

  const handlePollOptionChange = (idx, val) => {
    const updated = [...pollOptions];
    updated[idx] = val;
    setFormPollOptions(updated);
  };

  const setFormPollOptions = (updated) => {
    setPollOptions(updated);
  };

  const handleCommentChange = (postId, val) => {
    setCommentInputs(prev => ({ ...prev, [postId]: val }));
  };

  const handleCommentSubmit = (postId) => {
    const txt = commentInputs[postId];
    if (!txt || !txt.trim()) return;
    addCommentToPost(postId, txt);
    setCommentInputs(prev => ({ ...prev, [postId]: '' }));
  };

  const getPollTotalVotes = (poll) => {
    return poll.options.reduce((sum, opt) => sum + opt.votes, 0);
  };

  return (
    <div className="animate-fade" style={wrapper}>
      {/* Forum Header Banner */}
      <section style={forumHeader}>
        <div>
          <h1 style={{ fontSize: '2.2rem', fontWeight: 800, margin: 0 }}>Community Hub</h1>
          <p style={{ margin: '0.25rem 0 0 0', color: 'var(--text-secondary)' }}>Discuss global ecological studies, habits, and community plans.</p>
        </div>
        <button className="btn btn-primary" onClick={() => setShowCreateModal(true)}>
          <Plus size={16} />
          <span>Launch Topic</span>
        </button>
      </section>

      {/* Categories Horizontal Selector */}
      <section style={filterRow}>
        {categories.map((c, i) => (
          <button
            key={i}
            onClick={() => setActiveCategory(c)}
            style={activeCategory === c ? activeFilterStyle : filterStyle}
          >
            {c}
          </button>
        ))}
      </section>

      {/* Main Forum Grid Split */}
      <div style={communitySplit}>
        {/* Posts List */}
        <div style={postsCol}>
          {filteredPosts.map(post => {
            const hasVoted = post.poll && post.poll.userVotedOption !== null;
            const totalPollVotes = post.poll ? getPollTotalVotes(post.poll) : 0;

            return (
              <div key={post.id} className="glass-card" style={postCard}>
                {/* Author Metadata */}
                <div style={postMeta}>
                  <img src={post.author.avatar || 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=50&q=80'} alt="avatar" style={postAvatar} />
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                      <strong style={postAuthorName}>{post.author.username}</strong>
                      <span className="badge badge-info" style={{ fontSize: '0.65rem', padding: '0.1rem 0.4rem' }}>{post.author.title}</span>
                    </div>
                    <span style={postDateText}>{post.date} · <strong style={{ color: 'var(--color-primary)' }}>{post.category}</strong></span>
                  </div>
                </div>

                {/* Main Post Body */}
                <h3 style={postTitle}>{post.title}</h3>
                <p style={postBodyContent}>{post.content}</p>

                {/* Poll Details if exists */}
                {post.poll && (
                  <div style={pollContainer}>
                    <h4 style={pollQuestionStyle}>{post.poll.question}</h4>
                    <div style={pollOptionsList}>
                      {post.poll.options.map((opt, oIdx) => {
                        const pct = totalPollVotes > 0 ? ((opt.votes / totalPollVotes) * 100).toFixed(0) : 0;
                        const isVotedChoice = post.poll.userVotedOption === oIdx;

                        return (
                          <button
                            key={oIdx}
                            onClick={() => votePoll(post.id, oIdx)}
                            disabled={hasVoted}
                            style={hasVoted ? votedOptStyle(isVotedChoice) : optBtnStyle}
                          >
                            {hasVoted && (
                              <div style={{ ...progressBgBar, width: `${pct}%` }}></div>
                            )}
                            <div style={optionInnerRow}>
                              <span style={{ fontWeight: isVotedChoice ? 'bold' : 'normal' }}>
                                {opt.text}
                              </span>
                              {hasVoted && (
                                <span style={{ fontWeight: 'bold' }}>{pct}% ({opt.votes})</span>
                              )}
                            </div>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                )}

                {/* Controls (Like, Comment, Share icons) */}
                <div style={postControls}>
                  <button style={controlBtn} onClick={() => likePost(post.id)}>
                    <Heart size={16} fill={post.likedBy.includes(user?.username) ? 'var(--color-primary)' : 'none'} color={post.likedBy.includes(user?.username) ? 'var(--color-primary)' : 'currentColor'} />
                    <span>{post.likes} Likes</span>
                  </button>
                  <button style={controlBtn}>
                    <MessageSquare size={16} />
                    <span>{post.comments.length} Comments</span>
                  </button>
                </div>

                {/* Comment Section (Inline display) */}
                <div style={commentsBox}>
                  {post.comments.map((comm, cIdx) => (
                    <div key={cIdx} style={commentItem}>
                      <div style={commentAuthorBadge}>{comm.author.charAt(0)}</div>
                      <div style={{ flex: 1 }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                          <strong style={{ fontSize: '0.8rem', color: '#fff' }}>{comm.author}</strong>
                          <span style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>{comm.date}</span>
                        </div>
                        <p style={{ margin: 0, fontSize: '0.8rem', color: 'var(--text-secondary)' }}>{comm.content}</p>
                      </div>
                    </div>
                  ))}

                  {/* Add Comment Field */}
                  <div style={commentInputRow}>
                    <input
                      type="text"
                      placeholder="Write comment..."
                      value={commentInputs[post.id] || ''}
                      onChange={e => handleCommentChange(post.id, e.target.value)}
                      style={commentField}
                    />
                    <button style={commentSendBtn} onClick={() => handleCommentSubmit(post.id)}>Post</button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Right Sidebar - Trending Topics */}
        <div style={trendingCol}>
          <div className="glass-card" style={{ padding: '1.5rem' }}>
            <h3 style={{ margin: '0 0 1.25rem 0', fontSize: '1.15rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Award size={18} color="var(--color-primary)" />
              <span>Trending Indicators</span>
            </h3>
            <div style={trendItem}>
              <span style={trendRank}>#1</span>
              <div>
                <strong style={trendTag}>#MethaneWarming</strong>
                <span style={trendCount}>142 active opinions</span>
              </div>
            </div>
            <div style={trendItem}>
              <span style={trendRank}>#2</span>
              <div>
                <strong style={trendTag}>#E-WasteWatersheds</strong>
                <span style={trendCount}>98 discussions</span>
              </div>
            </div>
            <div style={trendItem}>
              <span style={trendRank}>#3</span>
              <div>
                <strong style={trendTag}>#Kelpfills</strong>
                <span style={trendCount}>64 comments</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Create Topic Modal */}
      {showCreateModal && (
        <div style={modalBackdrop} onClick={() => setShowCreateModal(false)}>
          <div className="glass-card animate-scale" style={modalContent} onClick={e => e.stopPropagation()}>
            <h3 style={{ margin: '0 0 1.5rem 0', fontSize: '1.3rem' }}>Launch Discussion</h3>
            <form onSubmit={handleCreatePost}>
              <div className="form-group">
                <label className="form-label">Title / Hook</label>
                <input
                  type="text"
                  required
                  placeholder="Summarize your observation..."
                  value={title}
                  onChange={e => setTitle(e.target.value)}
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label className="form-label">Category</label>
                <select
                  value={category}
                  onChange={e => setCategory(e.target.value)}
                  className="form-select"
                >
                  <option value="Atmosphere">Atmosphere</option>
                  <option value="Water Quality">Water Quality</option>
                  <option value="Deforestation">Deforestation</option>
                  <option value="Plastic Waste">Plastic Waste</option>
                  <option value="Discussion">Discussion</option>
                </select>
              </div>

              <div className="form-group">
                <label className="form-label">Details / Statement</label>
                <textarea
                  required
                  placeholder="Explain the background data or research..."
                  value={content}
                  onChange={e => setContent(e.target.value)}
                  className="form-textarea"
                ></textarea>
              </div>

              {/* Add Poll Section */}
              <div style={pollCheckboxRow}>
                <input
                  id="hasPoll"
                  type="checkbox"
                  checked={hasPoll}
                  onChange={e => setHasPoll(e.target.checked)}
                />
                <label htmlFor="hasPoll" style={{ fontSize: '0.85rem', color: 'var(--text-primary)', cursor: 'pointer' }}>
                  Include Survey Poll
                </label>
              </div>

              {hasPoll && (
                <div style={pollFormBlock}>
                  <div className="form-group">
                    <label className="form-label">Poll Question</label>
                    <input
                      type="text"
                      placeholder="e.g. Which metric is most critical?"
                      value={pollQuestion}
                      onChange={e => setPollQuestion(e.target.value)}
                      className="form-input"
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Options (Max 4)</label>
                    {pollOptions.map((opt, idx) => (
                      <input
                        key={idx}
                        type="text"
                        placeholder={`Option ${idx + 1}`}
                        value={opt}
                        onChange={e => {
                          const updated = [...pollOptions];
                          updated[idx] = e.target.value;
                          setFormPollOptions(updated);
                        }}
                        className="form-input"
                        style={{ marginBottom: '0.5rem' }}
                      />
                    ))}
                    {pollOptions.length < 4 && (
                      <button type="button" onClick={handleAddPollOption} style={addOptBtn}>
                        + Add Choice option
                      </button>
                    )}
                  </div>
                </div>
              )}

              <div style={formActions}>
                <button type="button" className="btn btn-secondary" onClick={() => setShowCreateModal(false)}>Cancel</button>
                <button type="submit" className="btn btn-primary">Publish Post</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

const wrapper = {
  width: '100%',
  paddingBottom: '4rem',
  display: 'flex',
  flexDirection: 'column',
  gap: '1.5rem'
};

const forumHeader = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  flexWrap: 'wrap',
  gap: '1rem'
};

const filterRow = {
  display: 'flex',
  gap: '0.75rem',
  overflowX: 'auto',
  paddingBottom: '0.5rem',
  borderBottom: '1px solid var(--panel-border)'
};

const filterStyle = {
  background: 'rgba(255,255,255,0.02)',
  border: '1px solid var(--panel-border)',
  color: 'var(--text-secondary)',
  padding: '0.5rem 1rem',
  borderRadius: '20px',
  cursor: 'pointer',
  whiteSpace: 'nowrap',
  transition: 'all 0.2s',
  fontSize: '0.85rem'
};

const activeFilterStyle = {
  background: 'var(--color-primary)',
  border: '1px solid var(--color-primary)',
  color: '#050a07',
  padding: '0.5rem 1rem',
  borderRadius: '20px',
  cursor: 'pointer',
  whiteSpace: 'nowrap',
  fontWeight: 700,
  fontSize: '0.85rem'
};

const communitySplit = {
  display: 'grid',
  gridTemplateColumns: '1.8fr 1fr',
  gap: '2rem'
};

const postsCol = {
  display: 'flex',
  flexDirection: 'column',
  gap: '1.5rem'
};

const postCard = {
  padding: '1.5rem'
};

const postMeta = {
  display: 'flex',
  gap: '0.75rem',
  alignItems: 'center',
  marginBottom: '1rem'
};

const postAvatar = {
  width: '40px',
  height: '40px',
  borderRadius: '50%',
  objectFit: 'cover',
  border: '1px solid var(--panel-border)'
};

const postAuthorName = {
  fontSize: '0.9rem',
  color: 'var(--text-primary)'
};

const postDateText = {
  fontSize: '0.75rem',
  color: 'var(--text-muted)',
  display: 'block'
};

const postTitle = {
  fontSize: '1.2rem',
  fontWeight: 800,
  marginBottom: '0.75rem'
};

const postBodyContent = {
  fontSize: '0.92rem',
  color: 'var(--text-secondary)',
  lineHeight: '1.6',
  marginBottom: '1.25rem'
};

const pollContainer = {
  background: 'rgba(255,255,255,0.02)',
  border: '1px solid var(--panel-border)',
  borderRadius: '8px',
  padding: '1rem',
  marginBottom: '1.25rem'
};

const pollQuestionStyle = {
  fontSize: '0.9rem',
  marginBottom: '0.75rem'
};

const pollOptionsList = {
  display: 'flex',
  flexDirection: 'column',
  gap: '0.5rem'
};

const optBtnStyle = {
  width: '100%',
  padding: '0.75rem 1rem',
  background: 'rgba(255,255,255,0.03)',
  border: '1px solid var(--panel-border)',
  borderRadius: '6px',
  color: 'var(--text-primary)',
  textAlign: 'left',
  cursor: 'pointer',
  transition: 'border-color 0.2s'
};

const votedOptStyle = (isCh) => ({
  width: '100%',
  padding: '0.75rem 1rem',
  background: 'rgba(255,255,255,0.02)',
  border: isCh ? '1px solid var(--color-primary)' : '1px solid var(--panel-border)',
  borderRadius: '6px',
  color: 'var(--text-primary)',
  textAlign: 'left',
  position: 'relative',
  overflow: 'hidden',
  cursor: 'default'
});

const progressBgBar = {
  position: 'absolute',
  top: 0,
  left: 0,
  height: '100%',
  backgroundColor: 'rgba(0, 245, 160, 0.08)',
  zIndex: 1,
  transition: 'width 0.5s ease-out'
};

const optionInnerRow = {
  display: 'flex',
  justifyContent: 'space-between',
  width: '100%',
  position: 'relative',
  zIndex: 2,
  fontSize: '0.85rem'
};

const postControls = {
  display: 'flex',
  gap: '1.5rem',
  borderTop: '1px solid var(--panel-border)',
  paddingTop: '1rem',
  marginBottom: '1rem'
};

const controlBtn = {
  background: 'none',
  border: 'none',
  color: 'var(--text-secondary)',
  display: 'flex',
  alignItems: 'center',
  gap: '0.4rem',
  fontSize: '0.82rem',
  cursor: 'pointer',
  transition: 'color 0.2s'
};

const commentsBox = {
  background: 'rgba(5, 10, 7, 0.4)',
  border: '1px solid var(--panel-border)',
  borderRadius: '8px',
  padding: '0.75rem',
  display: 'flex',
  flexDirection: 'column',
  gap: '0.75rem'
};

const commentItem = {
  display: 'flex',
  gap: '0.75rem',
  alignItems: 'flex-start',
  paddingBottom: '0.5rem',
  borderBottom: '1px solid rgba(255,255,255,0.03)'
};

const commentAuthorBadge = {
  width: '24px',
  height: '24px',
  borderRadius: '50%',
  background: 'var(--color-primary)',
  color: '#050a07',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: '0.75rem',
  fontWeight: 'bold',
  flexShrink: 0
};

const commentInputRow = {
  display: 'flex',
  gap: '0.5rem',
  marginTop: '0.25rem'
};

const commentField = {
  flex: 1,
  background: 'rgba(255,255,255,0.03)',
  border: '1px solid var(--panel-border)',
  borderRadius: '6px',
  padding: '0.5rem 0.75rem',
  color: '#fff',
  fontSize: '0.82rem',
  outline: 'none'
};

const commentSendBtn = {
  background: 'rgba(255,255,255,0.05)',
  border: '1px solid var(--panel-border)',
  color: 'var(--color-primary)',
  padding: '0.5rem 1rem',
  borderRadius: '6px',
  fontSize: '0.82rem',
  cursor: 'pointer',
  fontWeight: '600'
};

const trendingCol = {
  display: 'flex',
  flexDirection: 'column',
  gap: '1.5rem'
};

const trendItem = {
  display: 'flex',
  gap: '1rem',
  alignItems: 'center',
  paddingBottom: '1rem',
  borderBottom: '1px solid var(--panel-border)',
  marginBottom: '1rem'
};

const trendRank = {
  fontSize: '1.4rem',
  fontWeight: '800',
  color: 'var(--color-primary)',
  opacity: 0.8
};

const trendTag = {
  fontSize: '0.9rem',
  color: 'var(--text-primary)',
  display: 'block'
};

const trendCount = {
  fontSize: '0.75rem',
  color: 'var(--text-muted)'
};

const modalBackdrop = {
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  background: 'rgba(5, 10, 7, 0.8)',
  backdropFilter: 'blur(8px)',
  zIndex: 9999,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '1.5rem'
};

const modalContent = {
  width: '100%',
  maxWidth: '520px',
  padding: '2rem',
  maxHeight: '90vh',
  overflowY: 'auto'
};

const pollCheckboxRow = {
  display: 'flex',
  alignItems: 'center',
  gap: '0.5rem',
  margin: '1rem 0'
};

const pollFormBlock = {
  background: 'rgba(255,255,255,0.02)',
  padding: '1rem',
  borderRadius: '8px',
  border: '1px solid var(--panel-border)',
  marginBottom: '1rem'
};

const addOptBtn = {
  background: 'none',
  border: 'none',
  color: 'var(--color-primary)',
  fontSize: '0.8rem',
  cursor: 'pointer',
  alignSelf: 'flex-start'
};

const formActions = {
  display: 'flex',
  justifyContent: 'flex-end',
  gap: '0.75rem',
  marginTop: '1.5rem'
};

if (typeof document !== 'undefined') {
  const style = document.createElement('style');
  style.textContent = `
    @media (max-width: 900px) {
      .community-split { grid-template-columns: 1fr !important; }
    }
  `;
  document.head.appendChild(style);
}

export default Community;
