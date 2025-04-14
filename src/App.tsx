import React, { useState } from "react";
import { ChevronDown, Menu, X, Search, ChevronRight } from "lucide-react";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<string>("Overview");
  const [activeMobileItem, setActiveMobileItem] = useState<string | null>(null);
  const [activeMobileTab, setActiveMobileTab] = useState<string | null>(null);

  const navItems = [
    {
      title: "What we do",
      tabs: ["Overview", "Industries", "Services", "Products and Platforms"],
      content: {
        Overview: {
          title: "TCS is here to make a difference through technology.",
          description:
            "Leading the way in innovation for over 55 years, we build greater futures for businesses across multiple industries and 55 countries.",
          cta: "Discover all solutions",
        },
        Industries: {
          title: "Industry Solutions",
          items: [
            { name: "Banking", link: "/banking" },
            { name: "Insurance", link: "/insurance" },
            { name: "Manufacturing", link: "/manufacturing" },
            { name: "Retail", link: "/retail" },
            { name: "Healthcare", link: "/healthcare" },
            { name: "Life Sciences", link: "/life-sciences" },
          ],
        },
        Services: {
          title: "Our Services",
          items: [
            { name: "Cloud Services", link: "/cloud" },
            { name: "Cyber Security", link: "/security" },
            { name: "Enterprise Solutions", link: "/enterprise" },
            { name: "IoT & Digital Engineering", link: "/iot" },
          ],
        },
        "Products and Platforms": {
          title: "TCS Products & Platforms",
          items: [
            { name: "TCS BaNCS", link: "/bancs" },
            { name: "ignio™", link: "/ignio" },
            { name: "TCS ADD", link: "/add" },
            { name: "TCS OmniStore™", link: "/omnistore" },
          ],
        },
      },
    },
    { title: "Who we are" },
    { title: "Insights" },
    { title: "Careers" },
    { title: "Newsroom" },
    { title: "Investors" },
  ];

  const handleMobileItemClick = (item: string) => {
    if (activeMobileItem === item) {
      setActiveMobileItem(null);
      setActiveMobileTab(null);
    } else {
      setActiveMobileItem(item);
    }
  };

  const handleMobileTabClick = (tab: string) => {
    if (activeMobileTab === tab) {
      setActiveMobileTab(null);
    } else {
      setActiveMobileTab(tab);
    }
  };

  return (
    <div className="min-h-screen bg-[#1c2431]">
      {/* Main Navigation */}
      <nav className="bg-[#1c2431] fixed w-full top-0 z-50 border-b border-gray-700">
        <div className="max-w-[1400px] mx-auto px-4">
          <div className="flex justify-between h-16 items-center">
            {/* Logo */}
            <div className="flex items-center space-x-8">
              <span className="text-2xl font-bold text-white">Tech</span>

              {/* Desktop Navigation */}
              <div className="hidden lg:flex items-center space-x-1">
                {navItems.map((item) => (
                  <div
                    key={item.title}
                    className="relative group"
                    onMouseEnter={() => setActiveDropdown(item.title)}
                    onMouseLeave={(e) => {
                      const relatedTarget = e.relatedTarget as HTMLElement;
                      if (
                        !relatedTarget ||
                        !relatedTarget.closest(".dropdown-content")
                      ) {
                        setActiveDropdown(null);
                      }
                    }}
                  >
                    <button
                      className={`flex items-center space-x-1 px-4 py-2 text-sm font-medium transition-colors duration-200 group-hover:text-white ${
                        activeDropdown === item.title
                          ? "text-white bg-gray-700"
                          : "text-gray-300"
                      }`}
                    >
                      <span>{item.title}</span>
                      {item.tabs && (
                        <ChevronDown
                          size={16}
                          className={`transition-transform duration-200 ${
                            activeDropdown === item.title ? "rotate-180" : ""
                          }`}
                        />
                      )}
                    </button>

                    {/* Render dropdown content only if tabs exist */}
                    {item.tabs && activeDropdown === item.title && (
                      <div
                        className="absolute left-0 w-full bg-[#1c2431] border-t border-gray-700 shadow-xl transition-all duration-300 ease-in-out dropdown-content"
                        style={{ height: "50vh" }}
                        onMouseEnter={() => setActiveDropdown(item.title)}
                        onMouseLeave={() => setActiveDropdown(null)}
                      >
                        <div className="max-w-[1400px] mx-auto px-4 py-8 h-full">
                          {/* Dropdown content here */}
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Right side items */}
            <div className="hidden lg:flex items-center space-x-6">
              <a
                href="#"
                className="text-gray-300 hover:text-white text-sm transition-colors duration-200"
              >
                CONTACT US
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-white text-sm transition-colors duration-200"
              >
                TCS WORLDWIDE
              </a>
              <button className="text-gray-300 hover:text-white transition-colors duration-200">
                <Search size={20} />
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden flex items-center space-x-4">
              <button className="text-gray-300 hover:text-white">
                <Search size={20} />
              </button>
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-gray-300 hover:text-white p-2"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mega Menu Dropdown */}
        {activeDropdown === "What we do" && (
          <div
            className="absolute left-0 w-full bg-[#1c2431] border-t border-gray-700 shadow-xl transition-all duration-300 ease-in-out"
            style={{ height: "50vh" }}
            onMouseEnter={() => setActiveDropdown("What we do")}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <div className="max-w-[1400px] mx-auto px-4 py-8 h-full">
              {/* Vertical Tabs and Content */}
              <div className="flex h-full">
                {/* Vertical Tabs */}
                <div className="w-64 border-r border-gray-700 pr-4 h-full">
                  {navItems[0].tabs?.map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className={`w-full flex items-center justify-between text-left py-4 px-4 text-sm font-medium transition-all duration-200 rounded ${
                        activeTab === tab
                          ? "text-white bg-[#2a3444]"
                          : "text-gray-400 hover:text-white hover:bg-[#2a3444]"
                      }`}
                    >
                      <span>{tab}</span>
                      <ChevronRight
                        size={16}
                        className={`transition-opacity duration-200 ${
                          activeTab === tab ? "opacity-100" : "opacity-0"
                        }`}
                      />
                    </button>
                  ))}
                </div>

                {/* Content Area */}
                <div className="flex-1 pl-8 overflow-y-auto">
                  <div className="text-white">
                    {activeTab === "Overview" && (
                      <div className="max-w-2xl">
                        <h2 className="text-3xl font-light mb-4">
                          {navItems[0].content.Overview.title}
                        </h2>
                        <p className="text-gray-300 mb-8">
                          {navItems[0].content.Overview.description}
                        </p>
                        <button className="border-2 border-white px-6 py-2 rounded-full hover:bg-white hover:text-[#1c2431] transition-colors duration-200">
                          {navItems[0].content.Overview.cta}
                        </button>
                      </div>
                    )}

                    {(activeTab === "Industries" ||
                      activeTab === "Services" ||
                      activeTab === "Products and Platforms") && (
                      <div>
                        <h3 className="text-xl font-medium mb-6">
                          {navItems[0].content[activeTab].title}
                        </h3>
                        <div className="grid grid-cols-3 gap-6">
                          {navItems[0].content[activeTab].items.map((item) => (
                            <a
                              key={item.name}
                              href={item.link}
                              className="group text-gray-300 hover:text-white transition-colors duration-200 flex items-center space-x-2"
                            >
                              <span>{item.name}</span>
                              <ChevronRight
                                size={14}
                                className="opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                              />
                            </a>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden bg-[#1c2431] border-t border-gray-700 overflow-y-auto max-h-[calc(100vh-4rem)]">
            <div className="px-2 pt-2 pb-3">
              {navItems.map((item) => (
                <div
                  key={item.title}
                  className="border-b border-gray-700 last:border-b-0"
                >
                  <button
                    onClick={() => handleMobileItemClick(item.title)}
                    className="w-full flex items-center justify-between text-gray-300 hover:text-white px-3 py-4 text-base font-medium"
                  >
                    <span>{item.title}</span>
                    {item.tabs && (
                      <ChevronDown
                        size={16}
                        className={`transition-transform duration-200 ${
                          activeMobileItem === item.title ? "rotate-180" : ""
                        }`}
                      />
                    )}
                  </button>

                  {/* Mobile Dropdown Content */}
                  {activeMobileItem === item.title && item.tabs && (
                    <div className="bg-[#151b25] px-3 py-2">
                      {item.tabs.map((tab) => (
                        <div key={tab}>
                          <button
                            onClick={() => handleMobileTabClick(tab)}
                            className={`w-full flex items-center justify-between py-3 px-4 text-sm font-medium ${
                              activeMobileTab === tab
                                ? "text-white"
                                : "text-gray-400"
                            }`}
                          >
                            <span>{tab}</span>
                            <ChevronDown
                              size={14}
                              className={`transition-transform duration-200 ${
                                activeMobileTab === tab ? "rotate-180" : ""
                              }`}
                            />
                          </button>

                          {/* Mobile Tab Content */}
                          {activeMobileTab === tab && (
                            <div className="px-4 py-2 space-y-2">
                              {tab === "Overview" ? (
                                <div className="text-gray-300 space-y-4">
                                  <p>
                                    {navItems[0].content.Overview.description}
                                  </p>
                                  <button className="text-white border border-white px-4 py-2 rounded-full text-sm">
                                    {navItems[0].content.Overview.cta}
                                  </button>
                                </div>
                              ) : (
                                <div className="space-y-3">
                                  {navItems[0].content[tab].items.map(
                                    (item) => (
                                      <a
                                        key={item.name}
                                        href={item.link}
                                        className="block text-gray-400 hover:text-white py-1 text-sm"
                                      >
                                        {item.name}
                                      </a>
                                    )
                                  )}
                                </div>
                              )}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              {/* Mobile Footer Links */}
              <div className="mt-4 space-y-2 px-3">
                <a
                  href="#"
                  className="block text-gray-300 hover:text-white py-2 text-sm font-medium"
                >
                  CONTACT US
                </a>
                <a
                  href="#"
                  className="block text-gray-300 hover:text-white py-2 text-sm font-medium"
                >
                  TCS WORLDWIDE
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Main Content Area */}
      <div className="pt-16">
        <div className="max-w-[1400px] mx-auto px-4 py-12">
          <div className="h-[600px] flex items-center justify-center text-white text-2xl">
            Content Area
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
