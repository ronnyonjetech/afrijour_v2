import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Search, Edit3, BookOpen, PenTool, Coins, FileText, Book, PenTool as Tool } from 'lucide-react';
import 'bootstrap/dist/css/bootstrap.min.css';

const ResearchHub = () => {
  const { t } = useTranslation();
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [activeFilter, setActiveFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { id: 'all', name: 'All Resources' },
    { id: 'writing', name: 'Scientific Writing' },
    { id: 'review', name: 'Peer Review' },
    { id: 'guides', name: 'Research Guides' },
    { id: 'tools', name: 'Publication Tools' },
    { id: 'funding', name: 'Funding' },
  ];

  const resources = [
    { icon: Edit3, title: 'Scientific Writing Resources', category: 'writing', description: 'Academic writing guide.', image: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&q=80&w=400', tags: ['writing', 'academic'] },
    { icon: PenTool, title: 'Writing Toolkit', category: 'writing', description: 'Advanced writing techniques.', image: 'https://images.unsplash.com/photo-1456324504439-367cee3b3c32?auto=format&fit=crop&q=80&w=400', tags: ['writing', 'toolkit'] },
    { icon: BookOpen, title: 'Equator Network', category: 'tools', description: 'Research reporting standards.', image: 'https://images.unsplash.com/photo-1532012197267-da84d127e765?auto=format&fit=crop&q=80&w=400', tags: ['tools', 'health'] },
    { icon: Coins, title: 'Funding Opportunities', category: 'funding', description: 'Latest research grants.', video: 'https://player.vimeo.com/video/123456789', tags: ['funding', 'grants'] },
    { icon: FileText, title: 'Peer Review Guidelines', category: 'review', description: 'Effective peer reviews.', image: 'https://images.unsplash.com/photo-1516383740770-fbcc5ccbece0?auto=format&fit=crop&q=80&w=400', tags: ['review', 'guidelines'] },
    { icon: Book, title: 'Methodology Guide', category: 'guides', description: 'Step-by-step research methods.', image: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&q=80&w=400', tags: ['guides', 'methodology'] },
    { icon: Tool, title: 'Publication Tools', category: 'tools', description: 'Manuscript preparation tools.', image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=400', tags: ['tools', 'publication'] },
  ];

  const filteredResources = resources.filter(resource => (activeFilter === 'all' || resource.category === activeFilter) && 
    (resource.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
    resource.description.toLowerCase().includes(searchQuery.toLowerCase()) || 
    resource.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))));

  return (
    <section className="py-5 bg-light" ref={ref}>
      <div className="container text-center">
        <h2 className="mb-4">Research Resources Hub</h2>
        <p className="text-muted">Discover tools, guides, and opportunities to enhance your research.</p>
        <div className="my-4">
          <div className="input-group mb-3 w-50 mx-auto">
            <span className="input-group-text"><Search size={20} /></span>
            <input type="text" className="form-control" placeholder="Search resources..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
          </div>
          <div className="d-flex flex-wrap justify-content-center gap-2">
            {categories.map(category => (
              <button key={category.id} onClick={() => setActiveFilter(category.id)} className={`btn ${activeFilter === category.id ? 'btn-primary' : 'btn-outline-secondary'}`}>
                {category.name}
              </button>
            ))}
          </div>
        </div>
        <div className="row">
          {filteredResources.map((resource, index) => (
            <motion.div key={index} initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: index * 0.1 }} className="col-md-6 col-lg-4 mb-4">
              <div className="card h-100 shadow-sm">
                {resource.video ? (
                  <iframe src={resource.video} className="w-100" style={{ height: '200px' }} frameBorder="0" allow="autoplay; fullscreen" allowFullScreen></iframe>
                ) : (
                  <img src={resource.image} className="card-img-top" alt={resource.title} style={{ height: '200px', objectFit: 'cover' }} />
                )}
                <div className="card-body text-start">
                  <div className="d-flex align-items-center mb-3">
                    <resource.icon size={24} className="text-primary me-2" />
                    <h5 className="card-title mb-0">{resource.title}</h5>
                  </div>
                  <p className="card-text">{resource.description}</p>
                  <div className="d-flex flex-wrap gap-1">
                    {resource.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className="badge bg-primary">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResearchHub;
