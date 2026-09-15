const CONFIG = {
    whatsappNumber: "8801601773486", 
    whatsappMessage: "হ্যালো SH Media, আমি আপনাদের সার্ভিস সম্পর্কে জানতে চাই।",
    facebookPageUrl: "https://www.facebook.com/shmediabd"
};

// ১. মডেল তালিকা
const allModels = [
    { id: 1, name: "মডেল: শাহরিয়ার", price: "৳৪৫০০", image: "shahriar.jpg", youtubeIds: ["wflhey5yK-M", "Ev02IgtXrwc"] },
    { id: 2, name: "মডেল: আব্দুল হালিম", price: "৳৪৫০০", image: "halim.png", youtubeIds: ["85kWmK6IbS8"] },
    { id: 3, name: "মডেল: হৃদয়", price: "৳৫০০০", image: "hridoy.jpg", youtubeIds: ["c1DnN-uQy0c"] },
    { id: 4, name: "মডেল: আকিব মাহমুদ", price: "৳৫০০০", image: "akib.png", youtubeIds: ["pfme8GhuGaM"] },
    { id: 5, name: "মডেল: মাসুদ", price: "৳৫০০০", image: "masud.jpg", youtubeIds: ["ISugvNoWPz0"] },
    { id: 6, name: "মডেল: মাহিন", price: "৳৫৫০০", image: "mahin.jpg", youtubeIds: ["-LUiib6Tj8k"] },
    { id: 7, name: "মডেল: হুমায়ুন রুমি", price: "৳৮০০০", image: "humayun.jpg", youtubeIds: ["mcJZJhmGM3c"] },
    { id: 8, name: "মডেল: ইশা দস্তগীর", price: "৳৬৫০০", image: "isha.jpg", youtubeIds: ["xgD9lk6MYUw"] }
];

// ২. সেলেব্রিটি লিস্ট
const celebrities = [
    { id: 1, name: "কাজী হায়াৎ", price: "৳২৫,০০০", image: "kazi-hayat.jpg", youtubeIds: ["iJfNPkWlh14"] },
    { id: 2, name: "RJ Zibraan", price: "৳৪৫,০০০-৫০,০০০", image: "rj-zibraan.jpg", youtubeIds: [] },
    { id: 3, name: "নায়ক অমিত হাসান", price: "৳৩৫,০০০", image: "amit-hasan.jpg", youtubeIds: [] },
    { id: 4, name: "রকি খান", price: "আলোচনা সাপেক্ষে", image: "rocky-khan.jpg", youtubeIds: [] },
    { id: 5, name: "জামাল ভূঁইয়া", price: "আলোচনা সাপেক্ষে", image: "jamal-bhuyan.jpg", youtubeIds: [] },
    { id: 6, name: "ফজলুর রহমান বাবু", price: "আলোচনা সাপেক্ষে", image: "babu.jpg", youtubeIds: [] },
    { id: 7, name: "ডাক্তার এজাজ", price: "আলোচনা সাপেক্ষে", image: "ejaj.jpg", youtubeIds: [] },
    { id: 8, name: "সাবেরী আলম", price: "আলোচনা সাপেক্ষে", image: "saberi.jpg", youtubeIds: [] }
];

// ৩. ভয়েস ওভার সার্ভিস (এখানে ২টির জায়গায় ১টি মাত্র ডেমো ভিডিও রাখা হয়েছে)
const voiceOverData = {
    title: "প্রফেশনাল ভয়েস ওভার সার্ভিস",
    desc: "উচ্চমানের স্টুডিও রেকর্ডিং এবং অভিজ্ঞ মেল ও ফিমেল ভয়েস আর্টিস্ট।",
    price: "৳১,০০০ থেকে শুরু",
    youtubeId: "wflhey5yK-M", // শুধুমাত্র ১টি ডেমো ভিডিও আইডি
    features: [
        "মেল ও ফিমেল আর্টিস্ট অপশন",
        "এইচডি ক্রিস্টাল ক্লিয়ার স্টুডিও সাউন্ড",
        "বিজ্ঞাপন ও প্রমোশনাল ভিডিওর উপযোগী",
        "দ্রুততম সময়ে ডেলিভারি"
    ]
};

// ৪. ভিডিও এডিটিং প্যাকেজসমূহ
const videoPackages = [
    {
        id: 1,
        title: "Standard Product Video Editing",
        subtitle: "প্রোডাক্ট ভিডিওর জন্য",
        price: "৳১,৫০০",
        duration: "০ সেকেন্ড থেকে ১ মি: ২০ সেকেন্ড",
        videos: [
            { title: "Product Demo", id: "CRs-9SXK8Ng" }
        ],
        features: [
            "সাউন্ড ডিজাইন",
            "কালার গ্রেডিং",
            "বি-রোল (B-roll) ও স্টক ফুটেজ",
            "বেসিক টেক্সট অ্যানিমেশন"
        ],
        badge: "POPULAR"
    },
    {
        id: 2,
        title: "Standard Service Video Editing",
        subtitle: "সার্ভিস ভিডিওর জন্য",
        price: "৳২,০০০",
        duration: "০ সেকেন্ড থেকে ১ মি: ২০ সেকেন্ড",
        videos: [
            { title: "Service Demo", id: "Lv6Wnl1L-Y8" }
        ],
        features: [
            "সাউন্ড ডিজাইন ও কালার গ্রেডিং",
            "বি-রোল ও স্টক ফুটেজ",
            "স্ট্যান্ডার্ড টেক্সট অ্যানিমেশন",
            "স্ট্যান্ডার্ড মোশন অ্যানিমেশন"
        ],
        badge: "POPULAR"
    },
    {
        id: 3,
        title: "Premium Product & Service Editing",
        subtitle: "হাই-এন্ড প্রোডাক্ট ও সার্ভিস ভিডিও",
        price: "৳২,৫০০",
        duration: "০ সেকেন্ড থেকে ১ মি: ২০ সেকেন্ড",
        videos: [
            { title: "Product Demo", id: "Ja3OjcSRWJ8" },
            { title: "Service Demo", id: "rp1eTasI_9o" }
        ],
        features: [
            "সাউন্ড ডিজাইন ও কালার গ্রেডিং",
            "প্রিমিয়াম বি-রোল ও স্টক ফুটেজ",
            "প্রিমিয়াম টেক্সট অ্যানিমেশন",
            "স্ট্যান্ডার্ড অ্যানিমেশন ও ভিজ্যুয়ালাইজেশন"
        ],
        badge: "RECOMMENDED"
    }
];

// ৫. অন্যান্য ৩টি সার্ভিস
const otherServices = [
    { title: "ডিজিটাল মার্কেটিং (Digital Marketing)", icon: "📈", desc: "ফেইসবুক ও গুগল অ্যাড ক্যাম্পেইন ম্যানেজমেন্ট" },
    { title: "ওয়েব ডিজাইন অ্যান্ড ডেভেলপমেন্ট", icon: "💻", desc: "ই-কমার্স ও প্রফেশনাল রেসপন্সিভ ওয়েবসাইট" },
    { title: "মেটা অথরাইজড অ্যাড অ্যাকাউন্ট", icon: "✅", desc: "ঝামেলাহীন ডলার পেমেন্টসহ অফিসিয়াল মেটা অ্যাকাউন্ট" }
];

// ৬. ক্যারোসল ইমেজসমূহ (১টি করে স্লাইড দেখাবে)
const graphicsImages = ["g1.jpg", "g2.jpg", "g3.jpg", "g4.jpg", "g5.jpg"];
const photoImages = ["p1.jpg", "p2.jpg", "p3.jpg", "p4.jpg", "p5.jpg"];

// ৭. সাধারণ প্রশ্ন (FAQs)
const faqs = [
    { question: "ভিডিওর সময়সীমা কতটুকু হবে?", answer: "সাধারণত ১ মিনিট থেকে ১ মিনিট ১৫ সেকেন্ডের মধ্যে হয়।" },
    { question: "ডেলিভারি দিতে কত সময় লাগে?", answer: "শুটিংয়ের পর ৩ থেকে ৫ কর্মদিবসের মধ্যে ডেলিভারি দেওয়া হয়।" },
    { question: "আউটডোর শুটে কি অতিরিক্ত খরচ আছে?", answer: "হ্যাঁ, ইনডোর স্টুডিওর বাহিরে আউটডোর লোকেশনে শুট করলে প্রতি ভিডিওতে অতিরিক্ত ১,০০০ টাকা চার্জ যুক্ত হয়।" },
    { question: "আমাদের নিজস্ব লোকেশনে শুট করানো যাবে?", answer: "হ্যাঁ, তবে লোকেশনের দূরত্ব ও যাতায়াত খরচের ওপর ভিত্তি করে প্রাইস আলোচনা সাপেক্ষে নির্ধারিত হবে।" },
    { question: "রিভিশন পলিসি কি?", answer: "ভিডিও এডিটিংয়ে আমরা স্ট্যান্ডার্ড ২টি রিভিশন দিয়ে থাকি।" }
];