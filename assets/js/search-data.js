// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "publications",
          description: "publications by categories in reversed chronological order.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-experiences",
          title: "experiences",
          description: "past research and industry experiences",
          section: "Navigation",
          handler: () => {
            window.location.href = "/experiences/";
          },
        },{id: "nav-teaching",
          title: "teaching",
          description: "While at Stanford and Columbia, I&#39;ve worked as a teaching assistant for the following courses",
          section: "Navigation",
          handler: () => {
            window.location.href = "/teaching/";
          },
        },{id: "post-google-gemini-updates-flash-1-5-gemma-2-and-project-astra",
        
          title: 'Google Gemini updates: Flash 1.5, Gemma 2 and Project Astra <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "We’re sharing updates across our Gemini family of models and a glimpse of Project Astra, our vision for the future of AI assistants.",
        section: "Posts",
        handler: () => {
          
            window.open("https://blog.google/technology/ai/google-gemini-update-flash-ai-assistant-io-2024/", "_blank");
          
        },
      },{id: "post-displaying-external-posts-on-your-al-folio-blog",
        
          title: 'Displaying External Posts on Your al-folio Blog <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.open("https://medium.com/@al-folio/displaying-external-posts-on-your-al-folio-blog-b60a1d241a0a?source=rss-17feae71c3c4------2", "_blank");
          
        },
      },{id: "news-working-as-a-teaching-assistant-for-coms4170-user-interface-design",
          title: 'Working as a Teaching Assistant for COMS4170 User Interface Design',
          description: "",
          section: "News",},{id: "news-started-working-at-the-computer-graphics-and-user-interfaces-lab-sparkles",
          title: 'Started working at the Computer Graphics and User Interfaces Lab:sparkles:',
          description: "",
          section: "News",},{id: "news-working-as-a-teaching-assistant-for-coms4172-3d-user-interfaces-and-augmented-reality",
          title: 'Working as a Teaching Assistant for COMS4172 3D User Interfaces and Augmented Reality...',
          description: "",
          section: "News",},{id: "news-graduated-from-columbia-smile-mortar-board",
          title: 'Graduated from Columbia :smile:	:mortar_board:',
          description: "",
          section: "News",},{id: "news-started-grad-shool-at-stanford-evergreen-tree",
          title: 'Started grad shool at Stanford :evergreen_tree:',
          description: "",
          section: "News",},{id: "news-started-working-at-the-virtual-human-interaction-lab",
          title: 'Started working at the Virtual Human Interaction Lab',
          description: "",
          section: "News",},{id: "news-spent-a-summer-at-the-sip-lab-switzerland",
          title: 'Spent a summer at the SIP Lab :switzerland:',
          description: "",
          section: "News",},{id: "news-understanding-virtual-design-behaviors-was-accepted-at-design-studies-tada",
          title: '“Understanding virtual design behaviors” was accepted at Design Studies :tada:',
          description: "",
          section: "News",},{id: "news-socially-late-virtually-present-was-accepted-at-chi-2024-hourglass-flowing-sand",
          title: '“Socially Late, Virtually Present” was accepted at CHI 2024 :hourglass_flowing_sand:',
          description: "",
          section: "News",},{id: "news-completed-my-m-s-at-stanford-mortar-board",
          title: 'Completed my M.S. at Stanford :mortar_board:',
          description: "",
          section: "News",},{id: "news-taed-for-comm166-266-virtual-people-books",
          title: 'TAed for COMM166/266 Virtual People :books:',
          description: "",
          section: "News",},{id: "news-paper-accepted-to-cscw-tada",
          title: 'Paper accepted to CSCW :tada:',
          description: "",
          section: "News",},{id: "news-co-authored-papers-accepted-to-nature-human-behavior-and-computers-in-human-behavior-tada",
          title: 'Co-authored papers accepted to Nature Human Behavior and Computers in Human Behavior :tada:...',
          description: "",
          section: "News",},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%70%6F%72%74%69%61%77@%73%74%61%6E%66%6F%72%64.%65%64%75", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/pwang1230", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=mvtyBr4AAAAJ", "_blank");
        },
      },{
        id: 'social-work',
        title: 'Work',
        section: 'Socials',
        handler: () => {
          window.open("/assets/pdf/portia-cv.pdf", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
