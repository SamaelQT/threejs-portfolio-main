export const navLinks = [
  {
    id: 1,
    name: 'Trang chủ',
    href: '#home',
  },
  {
    id: 2,
    name: 'Về tôi',
    href: '#about',
  },
  {
    id: 3,
    name: 'Kinh nghiệm',
    href: '#work',
  },
  {
    id: 4,
    name: 'Liên hệ',
    href: '#contact',
  },
];

export const clientReviews = [
  {
    id: 1,
    name: 'Nguyễn Thanh Sơn',
    position: 'Chủ cửa hàng coffee',
    img: 'assets/review4.png',
    review:
      'Tôi đã nhờ Quang thiết kế website bán hàng cho shop của mình. Em làm rất tận tâm, lắng nghe ý kiến và đưa ra nhiều gợi ý hữu ích. Website đẹp, dễ sử dụng và giúp shop tôi tăng doanh số đáng kể. Rất hài lòng với dịch vụ của em!',
  },
  {
    id: 2,
    name: 'Lê Trọng Nghĩa',
    position: 'Quản lý IT - Trung tâm Tin học Long Bình',
    img: 'assets/review2.png',
    review:
      'Quang là một người có trách nhiệm cao trong công việc. Em xử lý tốt các vấn đề về thiết bị, mạng và hỗ trợ người dùng. Khả năng troubleshooting của em rất tốt, luôn tìm ra giải pháp nhanh chóng cho các sự cố phát sinh.',
  },
  {
    id: 3,
    name: 'Nguyễn Thanh Đăng',
    position: 'Trợ lý trưởng khoa - Đại học Công nghệ TP.HCM',
    img: 'assets/review3.png',
    review:
      'Trong 2 năm làm việc, Quang đã hỗ trợ rất tốt cho hệ thống IT của trường. Em xử lý được nhiều yêu cầu cùng lúc và luôn giữ thái độ chuyên nghiệp. Đặc biệt em rất kiên nhẫn khi hướng dẫn người dùng không am hiểu kỹ thuật.',
  },
  {
    id: 4,
    name: 'Phạm Thị Mai',
    position: 'Giáo viên - Trung tâm Tin học Long Bình',
    img: 'assets/review1.png',
    review:
      'Quang không chỉ giỏi về kỹ thuật mà còn có kỹ năng giao tiếp tốt. Em hướng dẫn học viên rất chi tiết và dễ hiểu. Tài liệu em biên soạn rất chất lượng, giúp học viên dễ dàng nắm bắt kiến thức.',
  },
];

export const myProjects = [
  {
    title: 'Podcastr - Nền tảng Podcast AI',
    desc: 'Podcastr là một nền tảng Phần mềm dịch vụ (SaaS) cách mạng giúp thay đổi cách tạo podcast. Với các tính năng AI tiên tiến như chức năng chuyển văn bản thành nhiều giọng nói, nó cho phép người sáng tạo tạo ra các giọng lồng tiếng đa dạng từ một đầu vào văn bản duy nhất.',
    subdesc:
      'Được xây dựng như một ứng dụng SaaS độc đáo với Next.js 14, Tailwind CSS, TypeScript, Framer Motion và Convex, Podcastr được thiết kế để đạt hiệu suất và khả năng mở rộng tối ưu.',
    href: 'https://www.youtube.com/watch?v=zfAb95tJvZQ',
    texture: '/textures/project/project1.mp4',
    logo: '/assets/project-logo1.png',
    logoStyle: {
      backgroundColor: '#2A1816',
      border: '0.2px solid #36201D',
      boxShadow: '0px 0px 60px 0px #AA3C304D',
    },
    spotlight: '/assets/spotlight1.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'assets/tailwindcss.png',
      },
      {
        id: 3,
        name: 'TypeScript',
        path: '/assets/typescript.png',
      },
      {
        id: 4,
        name: 'Framer Motion',
        path: '/assets/framer.png',
      },
    ],
  },
  {
    title: 'LiveDoc - Bản sao Google Docs thời gian thực',
    desc: 'LiveDoc là một ứng dụng cộng tác mạnh mẽ nâng cao khả năng chỉnh sửa tài liệu thời gian thực. Là phiên bản nâng cao của Google Docs, nó hỗ trợ hàng triệu cộng tác viên đồng thời, đảm bảo mọi thay đổi được ghi nhận ngay lập tức và chính xác.',
    subdesc:
      'Với LiveDoc, người dùng có thể trải nghiệm tương lai của cộng tác, nơi nhiều người đóng góp làm việc cùng nhau trong thời gian thực mà không bị trễ, bằng cách sử dụng các tính năng mới nhất của Next.js và Liveblocks.',
    href: 'https://www.youtube.com/watch?v=y5vE8y_f_OM',
    texture: '/textures/project/project2.mp4',
    logo: '/assets/project-logo2.png',
    logoStyle: {
      backgroundColor: '#13202F',
      border: '0.2px solid #17293E',
      boxShadow: '0px 0px 60px 0px #2F6DB54D',
    },
    spotlight: '/assets/spotlight2.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'assets/tailwindcss.png',
      },
      {
        id: 3,
        name: 'TypeScript',
        path: '/assets/typescript.png',
      },
      {
        id: 4,
        name: 'Framer Motion',
        path: '/assets/framer.png',
      },
    ],
  },
  {
    title: 'CarePulse - Hệ thống Quản lý Sức khỏe',
    desc: 'Một nền tảng chăm sóc sức khỏe sáng tạo được thiết kế để hợp lý hóa các quy trình y tế thiết yếu. Nó đơn giản hóa việc đăng ký bệnh nhân, lên lịch hẹn và quản lý hồ sơ y tế, mang lại trải nghiệm liền mạch cho cả nhà cung cấp dịch vụ chăm sóc sức khỏe và bệnh nhân.',
    subdesc:
      'Tập trung vào hiệu quả, CarePulse tích hợp các biểu mẫu phức tạp và thông báo SMS, bằng cách sử dụng Next.js, Appwrite, Twillio và Sentry để nâng cao quy trình hoạt động.',
    href: 'https://www.youtube.com/watch?v=lEflo_sc82g',
    texture: '/textures/project/project3.mp4',
    logo: '/assets/project-logo3.png',
    logoStyle: {
      backgroundColor: '#60f5a1',
      background:
        'linear-gradient(0deg, #60F5A150, #60F5A150), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)',
      border: '0.2px solid rgba(208, 213, 221, 1)',
      boxShadow: '0px 0px 60px 0px rgba(35, 131, 96, 0.3)',
    },
    spotlight: '/assets/spotlight3.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'assets/tailwindcss.png',
      },
      {
        id: 3,
        name: 'TypeScript',
        path: '/assets/typescript.png',
      },
      {
        id: 4,
        name: 'Framer Motion',
        path: '/assets/framer.png',
      },
    ],
  },
  {
    title: 'Horizon - Nền tảng Ngân hàng Trực tuyến',
    desc: 'Horizon là một nền tảng ngân hàng trực tuyến toàn diện cung cấp cho người dùng bảng điều khiển quản lý tài chính tập trung. Nó cho phép người dùng kết nối nhiều tài khoản ngân hàng, theo dõi các giao dịch thời gian thực và chuyển tiền liền mạch cho người dùng khác.',
    subdesc:
      'Được xây dựng với Next.js 14, Appwrite, Dwolla và Plaid, Horizon đảm bảo trải nghiệm ngân hàng mượt mà và an toàn, phù hợp với nhu cầu của người tiêu dùng hiện đại.',
    href: 'https://www.youtube.com/watch?v=PuOVqP_cjkE',
    texture: '/textures/project/project4.mp4',
    logo: '/assets/project-logo4.png',
    logoStyle: {
      backgroundColor: '#0E1F38',
      border: '0.2px solid #0E2D58',
      boxShadow: '0px 0px 60px 0px #2F67B64D',
    },
    spotlight: '/assets/spotlight4.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'assets/tailwindcss.png',
      },
      {
        id: 3,
        name: 'TypeScript',
        path: '/assets/typescript.png',
      },
      {
        id: 4,
        name: 'Framer Motion',
        path: '/assets/framer.png',
      },
    ],
  },
  {
    title: 'Imaginify - Ứng dụng Chỉnh sửa Ảnh AI',
    desc: 'Imaginify là một ứng dụng Phần mềm dịch vụ đột phá giúp người dùng tạo ra các thao tác ảnh tuyệt đẹp bằng công nghệ AI. Với các tính năng như chỉnh sửa hình ảnh dựa trên AI, hệ thống thanh toán và mô hình dựa trên tín dụng.',
    subdesc:
      'Được xây dựng với Next.js 14, Cloudinary AI, Clerk và Stripe, Imaginify kết hợp công nghệ tiên tiến với cách tiếp cận lấy người dùng làm trung tâm. Nó có thể biến thành nguồn thu nhập phụ hoặc thậm chí là một doanh nghiệp toàn diện.',
    href: 'https://www.youtube.com/watch?v=Ahwoks_dawU',
    texture: '/textures/project/project5.mp4',
    logo: '/assets/project-logo5.png',
    logoStyle: {
      backgroundColor: '#1C1A43',
      border: '0.2px solid #252262',
      boxShadow: '0px 0px 60px 0px #635BFF4D',
    },
    spotlight: '/assets/spotlight5.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'assets/tailwindcss.png',
      },
      {
        id: 3,
        name: 'TypeScript',
        path: '/assets/typescript.png',
      },
      {
        id: 4,
        name: 'Framer Motion',
        path: '/assets/framer.png',
      },
    ],
  },
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
    deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
    cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
    reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
    ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-24, 10, 0],
    targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
  };
};

export const workExperiences = [
  {
    id: 1,
    name: 'Trung tâm Tin học Long Bình',
    pos: 'IT Trainer / User Support',
    duration: '2024 - 2025',
    title:
      'Giảng dạy Tin học văn phòng (MS Office) cho học viên không chuyên. Hướng dẫn sử dụng máy tính, lắp ráp PC, sửa chữa thiết bị. Biên soạn tài liệu và hỗ trợ xử lý lỗi phần mềm.',
    icon: '/assets/training-center.png',
    animation: 'clapping',
  },
  {
    id: 2,
    name: 'Đại học Công nghệ TP.HCM',
    pos: 'IT Technical Support',
    duration: '2022 - 2024',
    title:
      'Hỗ trợ kỹ thuật toàn diện cho 30+ phòng học, xử lý 10-15 yêu cầu hỗ trợ mỗi ngày. Setup và troubleshooting thiết bị AV, mạng, máy tính. Bảo trì định kỳ và xử lý sự cố khẩn cấp trong giờ học.',
    icon: '/assets/university.png',
    animation: 'victory',
  },
  {
    id: 3,
    name: 'Tự học & Dự án cá nhân',
    pos: 'Web Developer (Self-learning)',
    duration: '2022 - 2024',
    title:
      'Tự học full-stack web development (React.js, Node.js, Express.js). Xây dựng API RESTful, quản lý database SQL, Git/GitHub. Phát triển kỹ năng debugging và troubleshooting ứng dụng web.',
    icon: '/assets/notion.svg',
    animation: 'salute',
  },
];
