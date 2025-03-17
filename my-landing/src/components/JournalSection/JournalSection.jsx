// import React, { useState, useEffect, useContext } from 'react';
// import { BookOpen, FileText, Search, ArrowRight, BookPlus, FilePlus } from "lucide-react";
// import { LanguageContext } from '../../contexts/LanguageContext';
// const JournalSection = () => {
//   const { translations } = useContext(LanguageContext);
//   return (
//     <div className="bg-white">
    
//       <section className="py-5">
//         <div className="container px-4">
//           <div className="text-center mb-4">
//             <h2 className="display-4 fw-bold text-primary">Featured Journals</h2>
//             <p className="lead text-muted mx-auto" style={{ maxWidth: "600px" }}>
//               Access our curated repository of esteemed African journals across diverse academic disciplines.
//             </p>
//           </div>

//           <div className="row g-4">
//             {[
//               {
//                 title: "Browse Journals",
//                 description: "Explore our comprehensive collection of peer-reviewed African journals.",
//                 image: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&q=80",
//                 icon: BookOpen,
//                 color: "bg-primary",
//               },
//               {
//                 title: "Submit Journals",
//                 description: "Submit your journal for inclusion in our prestigious collection.",
//                 image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80",
//                 icon: BookPlus,
//                 color: "bg-success",
//               },
//               {
//                 title: "Explore More",
//                 description: "Discover special issues, upcoming volumes, and research trends.",
//                 image: "https://images.unsplash.com/photo-1516979187457-637abb4f9353?auto=format&fit=crop&q=80",
//                 icon: Search,
//                 color: "bg-danger",
//               },
//             ].map((item, index) => (
//               <div key={index} className="col-md-4">
//                 <div className="card border-0 shadow-lg overflow-hidden">
//                   <img src={item.image} className="card-img-top" alt={item.title} />
//                   <div className="card-body text-center">
//                     <div className={`p-2 rounded-circle ${item.color} text-white d-inline-block mb-3`}>
//                       <item.icon size={24} />
//                     </div>
//                     <h5 className="card-title fw-bold">{item.title}</h5>
//                     <p className="card-text text-muted">{item.description}</p>
//                     <button className={`btn ${item.color} text-white`}>Explore <ArrowRight size={16} /></button>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

      
//       <section className="py-5">
//         <div className="container px-4">
//           <div className="text-center mb-4">
//             <h2 className="display-4 fw-bold text-primary">Latest Articles</h2>
//             <p className="lead text-muted mx-auto" style={{ maxWidth: "600px" }}>
//               Discover groundbreaking research from leading African scholars.
//             </p>
//           </div>

//           <div className="row g-4">
//             {[
//               {
//                 title: "Browse Articles",
//                 description: "Access a vast collection of research articles across multiple disciplines.",
//                 image: "https://images.unsplash.com/photo-1532619187608-e5375cab36aa?auto=format&fit=crop&q=80",
//                 icon: FileText,
//                 color: "bg-primary",
//               },
//               {
//                 title: "Submit Articles",
//                 description: "Submit your research for peer review and potential publication.",
//                 image: "https://images.unsplash.com/photo-1554475901-4538ddfbccc2?auto=format&fit=crop&q=80",
//                 icon: FilePlus,
//                 color: "bg-danger",
//               },
//             ].map((item, index) => (
//               <div key={index} className="col-md-6">
//                 <div className="card border-0 shadow-lg overflow-hidden">
//                   <img src={item.image} className="card-img-top" alt={item.title} />
//                   <div className="card-body text-center">
//                     <div className={`p-2 rounded-circle ${item.color} text-white d-inline-block mb-3`}>
//                       <item.icon size={24} />
//                     </div>
//                     <h5 className="card-title fw-bold">{item.title}</h5>
//                     <p className="card-text text-muted">{item.description}</p>
//                     <button className={`btn ${item.color} text-white`}>Get Started <ArrowRight size={16} /></button>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default JournalSection;


import React, { useContext } from 'react';
import { BookOpen, FileText, Search, ArrowRight, BookPlus, FilePlus } from "lucide-react";
import { LanguageContext } from '../../contexts/LanguageContext';

const JournalSection = () => {
  const { translations } = useContext(LanguageContext);
  
  const journalItems = [
    {
      ...translations.journalSection.items[0],
      image: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&q=80",
      icon: BookOpen,
      color: "bg-primary",
      link: "https://afrijour.web.app/"
    },
    {
      ...translations.journalSection.items[1],
      image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80",
      icon: BookPlus,
      color: "bg-success",
      link: "https://afrijour.web.app/upload"
    },
    {
      ...translations.journalSection.items[2],
      image: "https://images.unsplash.com/photo-1516979187457-637abb4f9353?auto=format&fit=crop&q=80",
      icon: Search,
      color: "bg-danger",
      link: "https://afrijour.web.app/news"
    }
  ];

  const articleItems = [
    {
      ...translations.articleSection.items[0],
      image: "https://images.unsplash.com/photo-1532619187608-e5375cab36aa?auto=format&fit=crop&q=80",
      icon: FileText,
      color: "bg-primary",
      link: "/browse-articles"
    },
    {
      ...translations.articleSection.items[1],
      image: "https://images.unsplash.com/photo-1554475901-4538ddfbccc2?auto=format&fit=crop&q=80",
      icon: FilePlus,
      color: "bg-danger",
      link: "/submit-articles"
    }
  ];

  return (
    <div className="bg-white">
      {/* Journals Section */}
      <section className="py-5">
        <div className="container px-4">
          <div className="text-center mb-4">
            <h2 className="display-4 fw-bold text-primary">{translations.journalSection.title}</h2>
            <p className="lead text-muted mx-auto" style={{ maxWidth: "600px" }}>
              {translations.journalSection.description}
            </p>
          </div>

          <div className="row g-4">
            {journalItems.map((item, index) => (
              <div key={index} className="col-md-4">
                <div className="card border-0 shadow-lg overflow-hidden">
                  <img src={item.image} className="card-img-top" alt={item.title} />
                  <div className="card-body text-center">
                    <div className={`p-2 rounded-circle ${item.color} text-white d-inline-block mb-3`}>
                      <item.icon size={24} />
                    </div>
                    <h5 className="card-title fw-bold">{item.title}</h5>
                    <p className="card-text text-muted">{item.description}</p>
                    <a href={item.link} className={`btn ${item.color} text-white`}>{translations.get_started} <ArrowRight size={16} /></a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Articles Section */}
      <section className="py-5">
        <div className="container px-4">
          <div className="text-center mb-4">
            <h2 className="display-4 fw-bold text-primary">{translations.articleSection.title}</h2>
            <p className="lead text-muted mx-auto" style={{ maxWidth: "600px" }}>
              {translations.articleSection.description}
            </p>
          </div>

          <div className="row g-4">
            {articleItems.map((item, index) => (
              <div key={index} className="col-md-6">
                <div className="card border-0 shadow-lg overflow-hidden">
                  <img src={item.image} className="card-img-top" alt={item.title} />
                  <div className="card-body text-center">
                    <div className={`p-2 rounded-circle ${item.color} text-white d-inline-block mb-3`}>
                      <item.icon size={24} />
                    </div>
                    <h5 className="card-title fw-bold">{item.title}</h5>
                    <p className="card-text text-muted">{item.description}</p>
                    <a href={item.link} className={`btn ${item.color} text-white`}>{translations.get_started} <ArrowRight size={16} /></a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default JournalSection;
