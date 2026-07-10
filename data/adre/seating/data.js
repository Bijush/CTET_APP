// ১০টি পাজলের একটি অ্যারে (Array) তৈরি করা হলো
const puzzleList = [
    {
        id: 1,
        title: "Puzzle 1: বৃত্তাকার টেবিল ও ৫ বন্ধু",
        clues: [
            "৫ জন বন্ধু: <b>A, B, C, D, E</b> কেন্দ্রের দিকে মুখ করে বসে আছে।",
            "<b>A</b> এর ঠিক ডানপাশে বসেছে <b>B</b>।",
            "<b>C</b> বসেছে <b>A</b> এবং <b>D</b> এর ঠিক মাঝখানে।",
            "বাকি জায়গাটিতে <b>E</b> বসবে।"
        ],
        options: ["A", "B", "C", "D", "E"],
        correctAnswers: ["ABEDC", "BEDCA", "EDCAB", "DCABE", "CABED"]
    },
    {
        id: 2,
        title: "Puzzle 2: চা পানের আড্ডা",
        clues: [
            "৫ জন ব্যক্তি: <b>P, Q, R, S, T</b> গোল হয়ে বসে চা খাচ্ছে।",
            "<b>P</b> বসেছে <b>T</b> এর ঠিক বামপাশে।",
            "<b>R</b> বসেছে <b>P</b> এবং <b>Q</b> এর ঠিক মাঝখানে।",
            "বাকি খালি সিটে <b>S</b> বসবে।"
        ],
        options: ["P", "Q", "R", "S", "T"],
        correctAnswers: ["PTRQS", "TRQSP", "RQSPT", "QSPTR", "SPTRQ"]
    },
    {
        id: 3,
        title: "Puzzle 3: বন্ধুদের লাঞ্চের টেবিল",
        clues: [
            "৫ জন বন্ধু: <b>M, N, O, P, Q</b> একসাথে দুপুরের খাবার খাচ্ছে।",
            "<b>M</b> এর মুখোমুখি বা ঠিক উল্টোদিকে কেউ নেই, তবে <b>N</b> এর ঠিক ডানপাশে <b>M</b> বসেছে।",
            "<b>O</b> বসেছে <b>P</b> এর ঠিক বামপাশে।",
            "<b>Q</b> বসেছে <b>M</b> এর ঠিক বামপাশে।"
        ],
        options: ["M", "N", "O", "P", "Q"],
        correctAnswers: ["MNOPQ", "NOPQM", "OPQMN", "PQMNO", "QMNOP"]
    },
    {
        id: 4,
        title: "Puzzle 4: তাস খেলার বৈঠক",
        clues: [
            "৫ জন মানুষ: <b>V, W, X, Y, Z</b> গোল হয়ে বসে তাস খেলছে।",
            "<b>X</b> এর ঠিক ডানপাশে বসেছে <b>Y</b>।",
            "<b>Z</b> বসেছে <b>V</b> এর ঠিক বামপাশে।",
            "<b>W</b> বসেছে <b>X</b> এবং <b>Z</b> এর ঠিক মাঝখানে।"
        ],
        options: ["V", "W", "X", "Y", "Z"],
        correctAnswers: ["VWX档案", "VZWXY", "ZWXYV", "WXYVZ", "XYVZW", "YVZWX"]
    },
    {
        id: 5,
        title: "Puzzle 5: ফ্যামিলি ডিনার",
        clues: [
            "পরিবারের ৫ সদস্য: <b>A, B, C, D, E</b> গোল টেবিলে ডিনার করছে।",
            "<b>C</b> এর ঠিক ডানপাশে বসেছে <b>E</b>।",
            "<b>B</b> এবং <b>D</b> একে অপরের পাশাপাশি বসেছে।",
            "<b>A</b> এর ঠিক বামপাশে <b>B</b> বসেছে।"
        ],
        options: ["A", "B", "C", "D", "E"],
        correctAnswers: ["ABCED", "BCEDA", "CEDAB", "EDABC", "DABCE"]
    },
    {
        id: 6,
        title: "Puzzle 6: ক্লাসরুমের গ্রুপ স্টাডি",
        clues: [
            "৫ জন শিক্ষার্থী: <b>I, J, K, L, M</b> বৃত্তাকার টেবিলে পড়াশোনা করছে।",
            "<b>I</b> এর ঠিক ডানপাশে বসেছে <b>J</b>।",
            "<b>K</b> বসেছে <b>M</b> এর ঠিক ডানপাশে।",
            "<b>L</b> বসেছে <b>J</b> এবং <b>M</b> এর ঠিক মাঝখানে।"
        ],
        options: ["I", "J", "K", "L", "M"],
        correctAnswers: ["IJLMK", "JLMKI", "LMKIJ", "MKIJL", "KIJLM"]
    },
    {
        id: 7,
        title: "Puzzle 7: পার্কের গোল বেঞ্চ",
        clues: [
            "৫ জন বৃদ্ধ মানুষ: <b>👉 F, G, H, J, K</b> পার্কের একটি গোল বেঞ্চে বসে আছেন।",
            "<b>F</b> এর ঠিক বামপাশে বসেছেন <b>G</b>।",
            "<b>H</b> এর ঠিক ডানপাশে বসেছেন <b>J</b>।",
            "<b>K</b> বসেছেন <b>G</b> এবং <b>H</b> এর ঠিক মাঝখানে।"
        ],
        options: ["F", "G", "H", "J", "K"],
        correctAnswers: ["FJKHG", "JKHGF", "KHGFJ", "HGFJK", "GFJKH"]
    },
    {
        id: 8,
        title: "Puzzle 8: মিটিং রুমের আলোচনা",
        clues: [
            "অফিসের ৫ জন কর্মকর্তা: <b>👉 A, C, E, G, I</b> গোল টেবিলে মিটিং করছেন।",
            "<b>E</b> এর ঠিক ডানপাশে বসেছেন <b>G</b>।",
            "<b>A</b> বসেছেন <b>I</b> এর ঠিক বামপাশে।",
            "<b>C</b> বসেছেন <b>G</b> এবং <b>A</b> এর ঠিক মাঝখানে।"
        ],
        options: ["A", "C", "E", "G", "I"],
        correctAnswers: ["EGCAI", "GCAIE", "CAIEG", "AIEGC", "IEGCA"]
    },
    {
        id: 9,
        title: "Puzzle 9: জন্মদিনের পার্টি",
        clues: [
            "৫ জন শিশু: <b>👉 R, S, T, U, V</b> কেক কাটার জন্য গোল হয়ে দাঁড়িয়েছে।",
            "<b>T</b> এর ঠিক বামপাশে দাঁড়িয়েছে <b>S</b>।",
            "<b>R</b> দাঁড়িয়েছে <b>V</b> এর ঠিক ডানপাশে।",
            "<b>U</b> দাঁড়িয়েছে <b>S</b> এবং <b>R</b> এর ঠিক মাঝখানে।"
        ],
        options: ["R", "S", "T", "U", "V"],
        correctAnswers: ["RTSUV", "TSUVR", "SUVRT", "UVRTS", "VRTSU"]
    },
    {
        id: 10,
        title: "Puzzle 10: ক্যাম্পফায়ার নাইট",
        clues: [
            "৫ জন ট্রাভেলার: <b>👉 W, X, Y, Z, V</b> ক্যাম্পফায়ারের চারপাশে গোল হয়ে বসেছে।",
            "<b>Y</b> এর ঠিক ডানপাশে বসেছে <b>Z</b>।",
            "<b>W</b> বসেছে <b>V</b> এর ঠিক বামপাশে।",
            "<b>X</b> বসেছে <b>Z</b> এবং <b>W</b> এর ঠিক মাঝখানে।"
        ],
        options: ["W", "X", "Y", "Z", "V"],
        correctAnswers: ["WXZYV", "XZYVW", "ZYVWX", "YVWXZ", "VWXZY"]
    }
];

// প্রথম ধাঁধাটিকে ডিফল্ট হিসেবে বা লোড করার জন্য একটি ভেরিয়েবলে রাখা হলো (আপাতত পেজ সামলানোর জন্য)
let currentPuzzleIndex = 0;
let puzzleData = puzzleList[currentPuzzleIndex];
