

// import React, { useState, useEffect,useContext } from "react";
// import {
//   Search,
//   ArrowUpRight,
//   BookOpen,
//   GraduationCap,
//   Library,
// } from "lucide-react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import { LanguageContext } from "../../contexts/LanguageContext";
// const CATEGORIES = [
//   { id: "all", label: "All Resources", icon: Library },
//   { id: "writing", label: "Scientific Writing", icon: BookOpen },
//   { id: "review", label: "Peer Review", icon: GraduationCap },
//   { id: "guides", label: "Research Guides", icon: Library },
//   { id: "tools", label: "Publication Tools", icon: BookOpen },
//   { id: "funding", label: "Funding", icon: GraduationCap },
// ];

// const FEATURED_ITEMS = [
//   {
//     type: "writing",
//     image:
//       "https://images.unsplash.com/photo-1455390582262-044cdead277a?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d3JpdGluZ3xlbnwwfHwwfHx8MA%3D%3D",
//     title: "Middlebury Scientific Writing Resources",
//     description:
//       "Comprehensive guide for academic writing excellence with templates and examples.",
//     link: "https://sites.middlebury.edu/middsciwriting/teaching-resources/",
//     tags: ["writing", "academic"],
//   },
//   {
//     type: "writing",
//     image:
//       "https://images.unsplash.com/photo-1455390582262-044cdead277a?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d3JpdGluZ3xlbnwwfHwwfHx8MA%3D%3D",
//     title: "CSTE Scientific Writing Toolkit",
//     description:
//       "Professional toolkit with advanced writing techniques and peer review guidelines.",
//     link: "https://www.cste.org/page/scientificwriting",
//     tags: ["writing", "toolkit"],
//   },
//   {
//     type: "tools",
//     image:
//       "https://www.workitdaily.com/media-library/image.jpg?id=19298339&width=980&quality=85",
//     title: "Equator Network Resources",
//     description:
//       "Essential guidelines and checklists for health research reporting standards.",
//     link: "https://www.equator-network.org/",
//     tags: ["tools", "health"],
//   },
//   {
//     type: "tools",
//     image:
//       "https://images.unsplash.com/photo-1455390582262-044cdead277a?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d3JpdGluZ3xlbnwwfHwwfHx8MA%3D%3D",
//     title: "Springer Nature Writing Guide",
//     description:
//       "Expert insights on manuscript preparation and submission best practices.",
//     link: "https://beta.springernature.com/pre-submission/writing-quality",
//     tags: ["writing", "publishing"],
//   },
//   {
//     type: "guides",
//     image:
//       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEeppK9-lfkr4hPSSFLtfwvOdK67z98vnqKg&s",
//     title: "CASP Research Tools",
//     description:
//       "Advanced tools for critical analysis and systematic review methodology.",
//     link: "https://casp-uk.net/casp-tools-checklists/",
//     tags: ["research", "analysis"],
//   },
//   {
//     type: "review",
//     image: "https://results.shopperapproved.com/hubfs/leave-a-review-hero.svg",
//     title: "Wiley Peer Review Guide",
//     description:
//       "Comprehensive handbook for conducting effective peer reviews.",
//     link: "https://authorservices.wiley.com/Reviewers/journal-reviewers/how-to-perform-a-peer-review/index.html",
//     tags: ["review", "publishing"],
//   },
//   {
//     type: "funding",
//     image:
//       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0TckvjidaGuMbgV8OMqAmB8ADGD4Zpkl4bg&s",
//     title: "Research Funding Opportunities",
//     description:
//       "Latest grants and funding programs for innovative research projects.",
//     link: "https://grandchallengesnigeria.org/funding-opportunities/",
//     tags: ["funding", "grants"],
//   },
// ];

// function ReportsSection() {
//   const [searchQuery, setSearchQuery] = useState("");
//   const [selectedCategory, setSelectedCategory] = useState("all");
//   const [filteredItems, setFilteredItems] = useState(FEATURED_ITEMS);
//   const { translations } = useContext(LanguageContext);
//   useEffect(() => {
//     const filtered = FEATURED_ITEMS.filter((item) => {
//       const matchesSearch =
//         item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
//         item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
//         item.tags.some((tag) =>
//           tag.toLowerCase().includes(searchQuery.toLowerCase())
//         );

//       const matchesCategory =
//         selectedCategory === "all" ||
//         item.type === selectedCategory ||
//         item.tags.includes(selectedCategory);

//       return matchesSearch && matchesCategory;
//     });

//     setFilteredItems(filtered);
//   }, [searchQuery, selectedCategory]);

//   return (
//     <div className="container py-5">
     
//       <div className="text-center mb-5">
//   {/* Enlarged and Styled Heading */}
//   <p className="fw-bold fs-2" style={{ color: "rgb(17, 53, 65)" }}>
//     Discover Curated Tools and Guides
//   </p>

//   {/* Search Bar with Larger Size and Theme Color */}
//   <div className="input-group mb-4 mx-auto" style={{ maxWidth: "800px" }}>
//     <span className="input-group-text bg-light border-0">
//       <Search className="text-primary" style={{ color: "rgb(17, 53, 65)" }} />
//     </span>
//     <input
//       type="text"
//       className="form-control form-control-lg border-0 shadow-sm"
//       placeholder="Search resources..."
//       value={searchQuery}
//       onChange={(e) => setSearchQuery(e.target.value)}
//       style={{
//         fontSize: "1.25rem",
//         color: "rgb(17, 53, 65)",
//         backgroundColor: "rgba(17, 53, 65, 0.05)",
//       }}
//     />
//   </div>

//   {/* Enlarged and Styled Category Buttons */}
//   <div className="d-flex flex-wrap justify-content-center gap-3">
//     {CATEGORIES.map((category) => {
//       const Icon = category.icon;
//       return (
//         <button
//           key={category.id}
//           onClick={() => setSelectedCategory(category.id)}
//           className={`btn px-4 py-2 fw-semibold fs-5 ${
//             selectedCategory === category.id
//               ? "text-white"
//               : "text-dark"
//           }`}
//           style={{
//             backgroundColor:
//               selectedCategory === category.id
//                 ? "rgb(17, 53, 65)"
//                 : "rgba(17, 53, 65, 0.1)",
//             color: selectedCategory === category.id ? "white" : "rgb(17, 53, 65)",
//             border: "2px solid rgb(17, 53, 65)",
//             borderRadius: "8px",
//           }}
//         >
//           <Icon className="me-2" size={20} />
//           {category.label}
//         </button>
//       );
//     })}
//   </div>
// </div>

     
//       <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3">
//         {filteredItems.map((item, index) => (
//           <div key={index} className="col mb-4">
//             <a
//               href={item.link}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="card h-100 text-decoration-none shadow-sm p-3 border-0"
//               style={{ backgroundColor: "rgba(17, 53, 65, 0.05)" }} // Light background
//             >
//               <div className="card-body">
//                 <div className="rounded-3 mb-3 d-flex align-items-center justify-content-center">
//                   <img
//                     src={item.image}
//                     alt={item.title}
//                     className="rounded-circle"
//                     style={{
//                       width: 72,
//                       height: 72,
//                       border: "2px solid rgb(17, 53, 65)",
//                     }} // Border for emphasis
//                   />
//                 </div>
//                 <h5
//                   className="card-title fw-bold fs-3"
//                   style={{ color: "rgb(17, 53, 65)" }}
//                 >
//                   {item.title}
//                 </h5>
//                 <p
//                   className="card-text fs-5"
//                   style={{ color: "rgba(17, 53, 65, 0.8)" }}
//                 >
//                   {item.description}
//                 </p>
//                 <div className="d-flex flex-wrap gap-2 mt-3">
//                   {item.tags.map((tag, tagIndex) => (
//                     <span
//                       key={tagIndex}
//                       className="badge px-3 py-2 fs-6"
//                       style={{
//                         backgroundColor: "rgb(17, 53, 65)",
//                         color: "white",
//                         borderRadius: "8px",
//                       }}
//                     >
//                       {tag}
//                     </span>
//                   ))}
//                 </div>
//                 <div
//                   className="mt-4 fw-semibold fs-5 d-flex align-items-center"
//                   style={{ color: "rgb(17, 53, 65)" }}
//                 >
//                   Explore Resource <ArrowUpRight className="ms-2" size={20} />
//                 </div>
//               </div>
//             </a>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default ReportsSection;

import React, { useState, useEffect, useContext } from "react";
import {
  Search,
  ArrowUpRight,
  BookOpen,
  GraduationCap,
  Library,
} from "lucide-react";
import "bootstrap/dist/css/bootstrap.min.css";
import { LanguageContext } from "../../contexts/LanguageContext";

function ReportsSection() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const { translations } = useContext(LanguageContext);

  const CATEGORIES = [
    { id: "all", label: translations.categories.all, icon: Library },
    { id: "writing", label: translations.categories.writing, icon: BookOpen },
    { id: "review", label: translations.categories.review, icon: GraduationCap },
    { id: "guides", label: translations.categories.guides, icon: Library },
    { id: "tools", label: translations.categories.tools, icon: BookOpen },
    { id: "funding", label: translations.categories.funding, icon: GraduationCap },
  ];

  const FEATURED_ITEMS = translations.featuredItems;

  const [filteredItems, setFilteredItems] = useState(FEATURED_ITEMS);

  useEffect(() => {
    const filtered = FEATURED_ITEMS.filter((item) => {
      const matchesSearch =
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.tags.some((tag) =>
          tag.toLowerCase().includes(searchQuery.toLowerCase())
        );

      const matchesCategory =
        selectedCategory === "all" ||
        item.type === selectedCategory ||
        item.tags.includes(selectedCategory);

      return matchesSearch && matchesCategory;
    });

    setFilteredItems(filtered);
  }, [searchQuery, selectedCategory, FEATURED_ITEMS]);

  return (
    <div className="container py-5">
      <div className="text-center mb-5">
        <p className="fw-bold fs-2" style={{ color: "rgb(17, 53, 65)" }}>
          {translations.heading}
        </p>

        <div className="input-group mb-4 mx-auto" style={{ maxWidth: "800px" }}>
          <span className="input-group-text bg-light border-0">
            <Search className="text-primary" style={{ color: "rgb(17, 53, 65)" }} />
          </span>
          <input
            type="text"
            className="form-control form-control-lg border-0 shadow-sm"
            placeholder={translations.searchPlaceholder}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            style={{
              fontSize: "1.25rem",
              color: "rgb(17, 53, 65)",
              backgroundColor: "rgba(17, 53, 65, 0.05)",
            }}
          />
        </div>

        <div className="d-flex flex-wrap justify-content-center gap-3">
          {CATEGORIES.map((category) => {
            const Icon = category.icon;
            return (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`btn px-4 py-2 fw-semibold fs-5 ${
                  selectedCategory === category.id ? "text-white" : "text-dark"
                }`}
                style={{
                  backgroundColor:
                    selectedCategory === category.id
                      ? "rgb(17, 53, 65)"
                      : "rgba(17, 53, 65, 0.1)",
                  color: selectedCategory === category.id ? "white" : "rgb(17, 53, 65)",
                  border: "2px solid rgb(17, 53, 65)",
                  borderRadius: "8px",
                }}
              >
                <Icon className="me-2" size={20} />
                {category.label}
              </button>
            );
          })}
        </div>
      </div>

      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3">
        {filteredItems.map((item, index) => (
          <div key={index} className="col mb-4">
            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="card h-100 text-decoration-none shadow-sm p-3 border-0"
              style={{ backgroundColor: "rgba(17, 53, 65, 0.05)" }}
            >
              <div className="card-body">
                <div className="rounded-3 mb-3 d-flex align-items-center justify-content-center">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="rounded-circle"
                    style={{
                      width: 72,
                      height: 72,
                      border: "2px solid rgb(17, 53, 65)",
                    }}
                  />
                </div>
                <h5 className="card-title fw-bold fs-3" style={{ color: "rgb(17, 53, 65)" }}>
                  {item.title}
                </h5>
                <p className="card-text fs-5" style={{ color: "rgba(17, 53, 65, 0.8)" }}>
                  {item.description}
                </p>
                <div className="d-flex flex-wrap gap-2 mt-3">
                  {item.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="badge px-3 py-2 fs-6"
                      style={{
                        backgroundColor: "rgb(17, 53, 65)",
                        color: "white",
                        borderRadius: "8px",
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div
                  className="mt-4 fw-semibold fs-5 d-flex align-items-center"
                  style={{ color: "rgb(17, 53, 65)" }}
                >
                  {translations.exploreResource} <ArrowUpRight className="ms-2" size={20} />
                </div>
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ReportsSection;
