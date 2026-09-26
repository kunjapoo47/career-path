/* =====================================================
   CAREERPATH
   COMPLETE WEBSITE JAVASCRIPT
===================================================== */


/* =====================================================
   COURSE DATABASE
===================================================== */

const courses = [

    {
        name: "MBBS",
        category: "Medical",
        stream: "Science",
        duration: "5.5 years",
        eligibility: "Class 12 with Physics, Chemistry and Biology",
        exams: "NEET-UG",
        salary: "₹4–8 LPA",
        careers: "Doctor, Medical Officer, Clinical Practice",
        higher: "MD, MS, PG Diploma, Specialisation",
        colleges: "AIIMS, JIPMER, CMC Vellore, Maulana Azad Medical College"
    },


    {
        name: "BDS",
        category: "Medical",
        stream: "Science",
        duration: "5 years",
        eligibility: "Class 12 with PCB",
        exams: "NEET-UG",
        salary: "₹3–6 LPA",
        careers: "Dentist, Dental Surgeon, Dental Research",
        higher: "MDS and dental specialisations",
        colleges: "Government Dental College institutions, Manipal, Saveetha"
    },


    {
        name: "B.Sc Nursing",
        category: "Medical",
        stream: "Science",
        duration: "4 years",
        eligibility: "Class 12 with relevant science subjects",
        exams: "State/university entrance processes vary",
        salary: "₹2.5–5 LPA",
        careers: "Staff Nurse, Clinical Nurse, Healthcare roles",
        higher: "M.Sc Nursing, specialisations",
        colleges: "AIIMS Nursing institutions, CMC Vellore, PGIMER"
    },


    {
        name: "B.Pharm",
        category: "Medical",
        stream: "Science",
        duration: "4 years",
        eligibility: "Class 12 with relevant science subjects",
        exams: "State CETs / university admissions",
        salary: "₹2.5–5 LPA",
        careers: "Pharmacist, Pharmaceutical Industry, Quality Control",
        higher: "M.Pharm, MBA, Research",
        colleges: "Jamia Hamdard, BITS Pilani, Manipal"
    },


    {
        name: "Pharm.D",
        category: "Medical",
        stream: "Science",
        duration: "6 years",
        eligibility: "Class 12 with relevant science subjects",
        exams: "University/state admission processes",
        salary: "₹3–6 LPA",
        careers: "Clinical Pharmacist, Hospital Pharmacy",
        higher: "Pharmacy specialisations, research",
        colleges: "Manipal, Jamia Hamdard and other pharmacy institutions"
    },


    {
        name: "BPT - Bachelor of Physiotherapy",
        category: "Medical",
        stream: "Science",
        duration: "4.5 years",
        eligibility: "Class 12 with relevant science subjects",
        exams: "State/university processes vary",
        salary: "₹2.5–5 LPA",
        careers: "Physiotherapist, Sports Rehabilitation",
        higher: "MPT and specialisations",
        colleges: "Manipal, SRM and other recognised institutions"
    },


    {
        name: "B.Tech Computer Science",
        category: "Engineering",
        stream: "Science",
        duration: "4 years",
        eligibility: "Usually Class 12 with PCM",
        exams: "JEE Main, state CETs, university exams",
        salary: "₹4–10 LPA",
        careers: "Software Developer, Web Developer, Technology Roles",
        higher: "M.Tech, MS, MBA",
        colleges: "IITs, NITs, IIITs, BITS Pilani"
    },


    {
        name: "B.Tech Artificial Intelligence",
        category: "Engineering",
        stream: "Science",
        duration: "4 years",
        eligibility: "Usually Class 12 with PCM",
        exams: "JEE Main, state CETs, university exams",
        salary: "₹4–10 LPA",
        careers: "AI Engineer, ML Engineer, Data Roles",
        higher: "M.Tech, MS, Research",
        colleges: "IITs, IIITs, NITs and other engineering institutes"
    },


    {
        name: "B.Tech Mechanical Engineering",
        category: "Engineering",
        stream: "Science",
        duration: "4 years",
        eligibility: "Usually Class 12 with PCM",
        exams: "JEE Main, state CETs, university exams",
        salary: "₹3–7 LPA",
        careers: "Mechanical Engineer, Manufacturing, Design",
        higher: "M.Tech, MBA",
        colleges: "IITs, NITs, government engineering colleges"
    },


    {
        name: "B.Tech Civil Engineering",
        category: "Engineering",
        stream: "Science",
        duration: "4 years",
        eligibility: "Usually Class 12 with PCM",
        exams: "JEE Main, state CETs, university exams",
        salary: "₹3–7 LPA",
        careers: "Civil Engineer, Construction, Infrastructure",
        higher: "M.Tech, MBA, specialised certifications",
        colleges: "IITs, NITs, state engineering colleges"
    },


    {
        name: "B.Tech Electrical Engineering",
        category: "Engineering",
        stream: "Science",
        duration: "4 years",
        eligibility: "Usually Class 12 with PCM",
        exams: "JEE Main, state CETs, university exams",
        salary: "₹3–7 LPA",
        careers: "Electrical Engineer, Power, Automation",
        higher: "M.Tech, MBA, research",
        colleges: "IITs, NITs, government engineering colleges"
    },


    {
        name: "B.Sc Physics",
        category: "Science",
        stream: "Science",
        duration: "3 years",
        eligibility: "Class 12 with Physics/Mathematics as required",
        exams: "CUET-UG / university admissions",
        salary: "₹2.5–5 LPA",
        careers: "Research Assistant, Laboratory, Education",
        higher: "M.Sc, PhD, Research",
        colleges: "DU, IISERs, University of Hyderabad"
    },


    {
        name: "B.Sc Chemistry",
        category: "Science",
        stream: "Science",
        duration: "3 years",
        eligibility: "Class 12 with relevant science subjects",
        exams: "CUET-UG / university admissions",
        salary: "₹2.5–5 LPA",
        careers: "Laboratory, Quality Control, Research",
        higher: "M.Sc, PhD",
        colleges: "DU, BHU, University of Hyderabad"
    },


    {
        name: "B.Sc Biology",
        category: "Science",
        stream: "Science",
        duration: "3 years",
        eligibility: "Class 12 with Biology",
        exams: "CUET-UG / university admissions",
        salary: "₹2.5–5 LPA",
        careers: "Laboratory, Research, Life Sciences",
        higher: "M.Sc, PhD, Biotechnology",
        colleges: "DU, BHU and other universities"
    },


    {
        name: "B.Sc Biotechnology",
        category: "Science",
        stream: "Science",
        duration: "3 years",
        eligibility: "Class 12 with relevant science subjects",
        exams: "CUET-UG / university admissions",
        salary: "₹2.5–5.5 LPA",
        careers: "Biotech Industry, Research, Laboratory",
        higher: "M.Sc, PhD, Biotechnology specialisations",
        colleges: "IISc-related programs, universities and research institutions"
    },


    {
        name: "B.Sc Microbiology",
        category: "Science",
        stream: "Science",
        duration: "3 years",
        eligibility: "Class 12 with Biology/science subjects",
        exams: "CUET-UG / university admissions",
        salary: "₹2.5–5 LPA",
        careers: "Microbiology Laboratory, Research, Healthcare",
        higher: "M.Sc, PhD",
        colleges: "University departments and science colleges"
    },


    {
        name: "B.Sc Mathematics",
        category: "Science",
        stream: "Science",
        duration: "3 years",
        eligibility: "Class 12 with Mathematics",
        exams: "CUET-UG / university admissions",
        salary: "₹3–6 LPA",
        careers: "Analytics, Education, Research",
        higher: "M.Sc, Statistics, Data Science",
        colleges: "ISI-related pathways, DU, BHU"
    },


    {
        name: "B.Sc Statistics",
        category: "Science",
        stream: "Science",
        duration: "3 years",
        eligibility: "Class 12 with Mathematics",
        exams: "CUET-UG / university admissions",
        salary: "₹4–8 LPA",
        careers: "Statistician, Data Analyst, Analytics",
        higher: "M.Sc Statistics, Data Science",
        colleges: "ISI, DU and other universities"
    },


    {
        name: "B.Sc Computer Science",
        category: "Science",
        stream: "Science",
        duration: "3 years",
        eligibility: "Usually Mathematics/Computer Science depending on institution",
        exams: "CUET-UG / university admissions",
        salary: "₹3–7 LPA",
        careers: "Software Developer, Web Developer, IT",
        higher: "MCA, M.Sc CS, MS",
        colleges: "DU, BHU, University of Hyderabad"
    },


    {
        name: "BCA",
        category: "Science",
        stream: "Any",
        duration: "3 years",
        eligibility: "Class 12; Mathematics requirements vary",
        exams: "CUET-UG / university exams",
        salary: "₹3–7 LPA",
        careers: "Software Developer, Web Developer, IT Support",
        higher: "MCA, M.Sc CS, MBA",
        colleges: "Christ University, Symbiosis and other universities"
    },


    {
        name: "B.Sc Agriculture",
        category: "Science",
        stream: "Science",
        duration: "4 years",
        eligibility: "Usually Class 12 with science/agriculture subjects",
        exams: "CUET-UG, ICAR-related admissions, state processes",
        salary: "₹3–6 LPA",
        careers: "Agriculture Officer, Agribusiness, Research",
        higher: "M.Sc Agriculture, MBA Agribusiness",
        colleges: "Agricultural universities, BHU and other institutions"
    },


    {
        name: "B.Sc Food Technology",
        category: "Science",
        stream: "Science",
        duration: "3–4 years",
        eligibility: "Relevant science subjects",
        exams: "CUET-UG / university admissions",
        salary: "₹3–6 LPA",
        careers: "Food Technologist, Quality Control",
        higher: "M.Sc Food Technology, MBA",
        colleges: "NIFTEM and other food technology institutes"
    },


    {
        name: "B.Com",
        category: "Commerce",
        stream: "Commerce",
        duration: "3 years",
        eligibility: "Class 12; requirements vary",
        exams: "CUET-UG / university admissions",
        salary: "₹2.5–5 LPA",
        careers: "Accounting, Banking, Finance, Business",
        higher: "M.Com, MBA, CA, CMA",
        colleges: "SRCC, Hindu College, Loyola College"
    },


    {
        name: "B.Com Honours",
        category: "Commerce",
        stream: "Commerce",
        duration: "3–4 years depending on university",
        eligibility: "Class 12; requirements vary",
        exams: "CUET-UG / university admissions",
        salary: "₹3–6 LPA",
        careers: "Finance, Accounting, Consulting",
        higher: "M.Com, MBA, CA, CMA",
        colleges: "SRCC, Hansraj College and other universities"
    },


    {
        name: "BBA",
        category: "Management",
        stream: "Any",
        duration: "3 years",
        eligibility: "Class 12",
        exams: "CUET-UG, NPAT, SET, university exams",
        salary: "₹3–6 LPA",
        careers: "Management, Marketing, HR, Business",
        higher: "MBA, PG management programs",
        colleges: "IIMs through integrated routes, Christ, NMIMS"
    },


    {
        name: "Integrated BBA + MBA",
        category: "Management",
        stream: "Any",
        duration: "5 years",
        eligibility: "Class 12",
        exams: "IPMAT, JIPMAT and institution-specific tests",
        salary: "₹6–12 LPA",
        careers: "Management, Consulting, Marketing, Finance",
        higher: "Further specialisation and professional education",
        colleges: "IIM Indore, IIM Rohtak, IIM Jammu and others"
    },


    {
        name: "BMS",
        category: "Management",
        stream: "Any",
        duration: "3 years",
        eligibility: "Class 12",
        exams: "CUET-UG / university-specific processes",
        salary: "₹3–6 LPA",
        careers: "Business, Management, Marketing",
        higher: "MBA, specialised management programs",
        colleges: "University of Delhi and other universities"
    },


    {
        name: "BA Economics",
        category: "Arts",
        stream: "Any",
        duration: "3–4 years",
        eligibility: "Class 12; Mathematics may be required",
        exams: "CUET-UG / university admissions",
        salary: "₹3–7 LPA",
        careers: "Economic Research, Banking, Analytics",
        higher: "MA Economics, MBA, research",
        colleges: "Delhi School of Economics pathways, DU, Presidency"
    },


    {
        name: "BA Psychology",
        category: "Arts",
        stream: "Any",
        duration: "3–4 years",
        eligibility: "Class 12",
        exams: "CUET-UG / university admissions",
        salary: "₹2.5–5 LPA",
        careers: "Counselling support, HR, Research",
        higher: "MA Psychology, professional specialisation",
        colleges: "DU, Christ and other universities"
    },


    {
        name: "BA Political Science",
        category: "Arts",
        stream: "Humanities",
        duration: "3–4 years",
        eligibility: "Class 12",
        exams: "CUET-UG / university admissions",
        salary: "₹2.5–5 LPA",
        careers: "Policy Research, Public Administration, Education",
        higher: "MA, Law, Public Policy",
        colleges: "Hindu College, Miranda House, DU"
    },


    {
        name: "BA History",
        category: "Arts",
        stream: "Humanities",
        duration: "3–4 years",
        eligibility: "Class 12",
        exams: "CUET-UG / university admissions",
        salary: "₹2.5–5 LPA",
        careers: "Education, Research, Museums, Content",
        higher: "MA, PhD, Law, Public Policy",
        colleges: "Hindu College, St Stephen's, DU"
    },


    {
        name: "BA Journalism & Mass Communication",
        category: "Arts",
        stream: "Any",
        duration: "3–4 years",
        eligibility: "Class 12",
        exams: "CUET-UG / university exams",
        salary: "₹2.5–6 LPA",
        careers: "Journalism, Content, Media, Public Relations",
        higher: "MA Journalism, Media Studies",
        colleges: "IIMC-related pathways, university media schools"
    },


    {
        name: "Integrated LL.B.",
        category: "Law",
        stream: "Any",
        duration: "5 years",
        eligibility: "Class 12",
        exams: "CLAT, AILET and university exams",
        salary: "₹3–8 LPA",
        careers: "Lawyer, Legal Advisor, Corporate Legal",
        higher: "LL.M, specialisations",
        colleges: "NLUs, Symbiosis Law School and other law institutions"
    },


    {
        name: "B.Des",
        category: "Design",
        stream: "Any",
        duration: "4 years",
        eligibility: "Class 12",
        exams: "UCEED, NID DAT, NIFT and institution exams",
        salary: "₹3–7 LPA",
        careers: "Product Designer, UI/UX, Communication Designer",
        higher: "M.Des and design specialisations",
        colleges: "NID, IIT design programs, NIFT"
    },


    {
        name: "B.Arch",
        category: "Design",
        stream: "Science",
        duration: "5 years",
        eligibility: "Usually Class 12 with Mathematics",
        exams: "NATA / JEE Main Paper 2",
        salary: "₹3–6 LPA",
        careers: "Architect, Urban Design, Planning",
        higher: "M.Arch, Planning and specialisations",
        colleges: "SPA Delhi, IIT Roorkee and architecture institutions"
    },


    {
        name: "B.Plan",
        category: "Design",
        stream: "Science",
        duration: "4 years",
        eligibility: "Usually Mathematics in Class 12",
        exams: "NATA/JEE-related or university processes vary",
        salary: "₹3–6 LPA",
        careers: "Urban Planner, Regional Planner",
        higher: "M.Plan",
        colleges: "School of Planning and Architecture and other institutes"
    },


    {
        name: "B.Sc Hospitality / Hotel Management",
        category: "Hospitality",
        stream: "Any",
        duration: "3–4 years",
        eligibility: "Class 12",
        exams: "NCHM JEE / university admissions",
        salary: "₹2.5–5 LPA",
        careers: "Hotel Manager, Food & Beverage, Hospitality",
        higher: "MBA Hospitality, specialised management",
        colleges: "IHM institutions, hotel management schools"
    },


    {
        name: "BBA Aviation",
        category: "Management",
        stream: "Any",
        duration: "3 years",
        eligibility: "Class 12",
        exams: "Institution-specific admission",
        salary: "₹3–6 LPA",
        careers: "Airport Operations, Aviation Management",
        higher: "MBA Aviation / Management",
        colleges: "University aviation management programs"
    },


    {
        name: "B.Sc Forensic Science",
        category: "Science",
        stream: "Science",
        duration: "3 years",
        eligibility: "Class 12 with relevant science subjects",
        exams: "CUET-UG / university admissions",
        salary: "₹3–6 LPA",
        careers: "Forensic Laboratory, Investigation Support",
        higher: "M.Sc Forensic Science",
        colleges: "National Forensic Sciences University and others"
    },


    {
        name: "B.Sc Environmental Science",
        category: "Science",
        stream: "Science",
        duration: "3 years",
        eligibility: "Class 12",
        exams: "CUET-UG / university admissions",
        salary: "₹2.5–5 LPA",
        careers: "Environmental Consultant, Research, Sustainability",
        higher: "M.Sc Environmental Science",
        colleges: "University environmental science departments"
    },


    {
        name: "BCA Data Science",
        category: "Science",
        stream: "Any",
        duration: "3 years",
        eligibility: "Class 12; Mathematics requirements vary",
        exams: "University admissions / CUET where applicable",
        salary: "₹3.5–8 LPA",
        careers: "Data Analyst, Junior Data Scientist, BI roles",
        higher: "MCA, MSc Data Science",
        colleges: "Universities offering computing/data programs"
    },


    {
        name: "Diploma in Engineering",
        category: "Engineering",
        stream: "Any",
        duration: "3 years",
        eligibility: "Usually Class 10",
        exams: "State/polytechnic admission processes",
        salary: "₹2–4.5 LPA",
        careers: "Technician, Junior Engineer pathways, Technical roles",
        higher: "B.Tech lateral entry",
        colleges: "State polytechnics and government/private institutions"
    },


    {
        name: "ITI Electrician",
        category: "Engineering",
        stream: "Any",
        duration: "1–2 years",
        eligibility: "Usually Class 10",
        exams: "ITI admission processes",
        salary: "₹2–4 LPA",
        careers: "Electrician, Maintenance Technician",
        higher: "Advanced technical training / apprenticeships",
        colleges: "Government and private ITIs"
    }

];



/* =====================================================
   ENTRANCE EXAM DATABASE
===================================================== */

const exams = [

    {
        name: "JEE Main",
        icon: "⚙️",
        category: "Engineering",
        for: "B.Tech / B.E.",
        description: "Major entrance examination for engineering admissions."
    },


    {
        name: "JEE Advanced",
        icon: "🚀",
        category: "Engineering",
        for: "IIT Engineering",
        description: "Entrance examination for undergraduate programs at IITs."
    },


    {
        name: "NEET-UG",
        icon: "🩺",
        category: "Medical",
        for: "Medical & Health",
        description: "National entrance examination used for medical admissions."
    },


    {
        name: "CUET-UG",
        icon: "🎓",
        category: "University",
        for: "UG Courses",
        description: "Common entrance route used by participating universities."
    },


    {
        name: "CLAT",
        icon: "⚖️",
        category: "Law",
        for: "Law",
        description: "Common entrance examination for participating National Law Universities."
    },


    {
        name: "AILET",
        icon: "⚖️",
        category: "Law",
        for: "Law",
        description: "Entrance examination associated with National Law University Delhi."
    },


    {
        name: "NATA",
        icon: "🏛️",
        category: "Architecture",
        for: "B.Arch",
        description: "Aptitude test used by participating architecture institutions."
    },


    {
        name: "UCEED",
        icon: "🎨",
        category: "Design",
        for: "B.Des",
        description: "Undergraduate design entrance examination."
    },


    {
        name: "NID DAT",
        icon: "✏️",
        category: "Design",
        for: "Design",
        description: "Design aptitude and admission process associated with NID."
    },


    {
        name: "NIFT Entrance",
        icon: "👗",
        category: "Fashion",
        for: "Fashion & Design",
        description: "Entrance process for programs at NIFT."
    },


    {
        name: "NCHM JEE",
        icon: "🏨",
        category: "Hospitality",
        for: "Hotel Management",
        description: "Entrance examination for participating hotel management institutes."
    },


    {
        name: "IPMAT",
        icon: "💼",
        category: "Management",
        for: "Integrated Management",
        description: "Entrance route for selected integrated management programs."
    },


    {
        name: "JIPMAT",
        icon: "📈",
        category: "Management",
        for: "Integrated Management",
        description: "Entrance examination for selected integrated management programs."
    },


    {
        name: "NPAT",
        icon: "🏢",
        category: "Management",
        for: "Management",
        description: "Entrance examination associated with NMIMS undergraduate programs."
    },


    {
        name: "SET",
        icon: "🎯",
        category: "University",
        for: "UG Programs",
        description: "Entrance examination for selected Symbiosis programs."
    },


    {
        name: "IAT",
        icon: "🔬",
        category: "Science",
        for: "IISER Programs",
        description: "Aptitude-based entrance route for IISER programs."
    },


    {
        name: "NEST",
        icon: "🧪",
        category: "Science",
        for: "Basic Science",
        description: "Entrance examination associated with selected integrated science programs."
    },


    {
        name: "BITSAT",
        icon: "💻",
        category: "Engineering",
        for: "BITS Programs",
        description: "Entrance examination for undergraduate programs at BITS Pilani campuses."
    },


    {
        name: "COMEDK",
        icon: "🏫",
        category: "Engineering",
        for: "Karnataka Engineering",
        description: "Entrance route for participating engineering colleges in Karnataka."
    },


    {
        name: "KEAM",
        icon: "📐",
        category: "Engineering",
        for: "Kerala",
        description: "Kerala entrance examination system for participating professional programs."
    },


    {
        name: "KCET",
        icon: "🏫",
        category: "Engineering",
        for: "Karnataka",
        description: "State-level entrance process for participating Karnataka programs."
    },


    {
        name: "MHT-CET",
        icon: "🏛️",
        category: "Engineering",
        for: "Maharashtra",
        description: "State-level entrance examination for participating Maharashtra programs."
    },


    {
        name: "WBJEE",
        icon: "⚙️",
        category: "Engineering",
        for: "West Bengal",
        description: "State-level entrance examination for participating programs."
    },


    {
        name: "CA Foundation",
        icon: "📊",
        category: "Professional",
        for: "Chartered Accountancy",
        description: "Entry-level examination in the Chartered Accountancy pathway."
    },


    {
        name: "CSEET",
        icon: "📋",
        category: "Professional",
        for: "Company Secretary",
        description: "Entry-level examination associated with the Company Secretary pathway."
    }


];



/* =====================================================
   COLLEGE DATABASE
===================================================== */

const colleges = [

    {
        name: "Indian Institute of Technology Delhi",
        city: "New Delhi",
        type: "Government",
        courses: "Engineering, Technology, Science"
    },


    {
        name: "Indian Institute of Technology Bombay",
        city: "Mumbai",
        type: "Government",
        courses: "Engineering, Technology, Science, Design"
    },


    {
        name: "Indian Institute of Technology Madras",
        city: "Chennai",
        type: "Government",
        courses: "Engineering, Technology, Science"
    },


    {
        name: "Indian Institute of Science",
        city: "Bengaluru",
        type: "Government",
        courses: "Science, Research"
    },


    {
        name: "AIIMS New Delhi",
        city: "New Delhi",
        type: "Government",
        courses: "Medicine, Nursing and Health Sciences"
    },


    {
        name: "Banaras Hindu University",
        city: "Varanasi",
        type: "Government",
        courses: "Science, Arts, Commerce, Medicine"
    },


    {
        name: "University of Delhi",
        city: "Delhi",
        type: "Government",
        courses: "Arts, Science, Commerce"
    },


    {
        name: "Indian Statistical Institute",
        city: "Kolkata",
        type: "Government / Research Institute",
        courses: "Statistics, Mathematics, Data Science"
    },


    {
        name: "National Institute of Design",
        city: "Ahmedabad",
        type: "Government",
        courses: "Design"
    },


    {
        name: "National Institute of Fashion Technology",
        city: "New Delhi",
        type: "Government",
        courses: "Fashion, Design, Management"
    },


    {
        name: "National Law University Delhi",
        city: "New Delhi",
        type: "Government",
        courses: "Law"
    },


    {
        name: "Christ University",
        city: "Bengaluru",
        type: "Private",
        courses: "Commerce, Management, Arts, Science"
    },


    {
        name: "BITS Pilani",
        city: "Pilani",
        type: "Private / Deemed",
        courses: "Engineering, Science, Pharmacy, Management"
    },


    {
        name: "Manipal Academy of Higher Education",
        city: "Manipal",
        type: "Private / Deemed",
        courses: "Medicine, Engineering, Pharmacy, Design"
    },


    {
        name: "SRM Institute of Science and Technology",
        city: "Chennai",
        type: "Private / Deemed",
        courses: "Engineering, Science, Management, Medicine"
    },


    {
        name: "Vellore Institute of Technology",
        city: "Vellore",
        type: "Private",
        courses: "Engineering, Technology, Science"
    }

];



/* =====================================================
   NAVIGATION
===================================================== */

function showSection(sectionId) {

    const sections =
        document.querySelectorAll(".section");

    sections.forEach(function(section) {

        section.classList.add("hidden");

    });


    const selected =
        document.getElementById(sectionId);

    if (selected) {

        selected.classList.remove("hidden");

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    }


    if (sectionId === "courses") {

        renderCourses();

    }


    if (sectionId === "exams") {

        renderExams();

    }


    if (sectionId === "colleges") {

        renderColleges();

    }

}



/* =====================================================
   COURSE RENDERING
===================================================== */

function renderCourses(list = courses) {

    const grid =
        document.getElementById("courseGrid");

    const count =
        document.getElementById("courseCount");


    if (!grid) return;


    count.textContent =
        `${list.length} course${list.length !== 1 ? "s" : ""} found`;


    grid.innerHTML = "";


    if (list.length === 0) {

        grid.innerHTML = `

            <div class="details-box">

                <h3>No courses found</h3>

                <p>
                    Try another search or remove some filters.
                </p>

            </div>

        `;

        return;

    }


    list.forEach(function(course, index) {

        const card =
            document.createElement("div");


        card.className =
            "course-card";


        card.innerHTML = `

            <span class="course-category">
                ${course.category}
            </span>

            <h3>
                ${course.name}
            </h3>

            <p>
                <strong>Duration:</strong>
                ${course.duration}
            </p>

            <p>
                <strong>Stream:</strong>
                ${course.stream}
            </p>

            <p>
                <strong>Entrance:</strong>
                ${course.exams}
            </p>

            <p class="salary">
                💰 Starting Salary:
                ${course.salary}
            </p>

            <button
                onclick="openCourse(${courses.indexOf(course)})">

                View Complete Details →

            </button>

        `;


        grid.appendChild(card);

    });

}



/* =====================================================
   COURSE FILTER
===================================================== */

function filterCourses() {

    const search =
        document
            .getElementById("courseSearch")
            .value
            .toLowerCase();


    const stream =
        document
            .getElementById("streamFilter")
            .value;


    const category =
        document
            .getElementById("categoryFilter")
            .value;


    const filtered =
        courses.filter(function(course) {

            const matchesSearch =

                course.name
                    .toLowerCase()
                    .includes(search)

                ||

                course.category
                    .toLowerCase()
                    .includes(search)

                ||

                course.careers
                    .toLowerCase()
                    .includes(search);


            const matchesStream =

                stream === "all"

                ||

                course.stream === stream

                ||

                course.stream === "Any";


            const matchesCategory =

                category === "all"

                ||

                course.category === category;


            return (
                matchesSearch &&
                matchesStream &&
                matchesCategory
            );

        });


    renderCourses(filtered);

}



/* =====================================================
   COURSE MODAL
===================================================== */

function openCourse(index) {

    const course =
        courses[index];


    const modal =
        document.getElementById("courseModal");


    const content =
        document.getElementById("modalContent");


    content.innerHTML = `

        <div class="modal-title">

            ${course.name}

        </div>


        <span class="course-category">

            ${course.category}

        </span>


        <div class="detail-grid">


            <div class="detail-item">

                <strong>
                    Duration
                </strong>

                ${course.duration}

            </div>


            <div class="detail-item">

                <strong>
                    Eligibility
                </strong>

                ${course.eligibility}

            </div>


            <div class="detail-item">

                <strong>
                    Entrance Exams
                </strong>

                ${course.exams}

            </div>


            <div class="detail-item">

                <strong>
                    Starting Salary
                </strong>

                ${course.salary}

            </div>


        </div>


        <div class="modal-section">

            <h3>
                💼 Career Options
            </h3>

            <p>
                ${course.careers}
            </p>

        </div>


        <div class="modal-section">

            <h3>
                🎓 Higher Studies
            </h3>

            <p>
                ${course.higher}
            </p>

        </div>


        <div class="modal-section">

            <h3>
                🏫 Example Institutes
            </h3>

            <p>
                ${course.colleges}
            </p>

        </div>


        <div class="modal-section">

            <h3>
                💰 Salary Information
            </h3>

            <p>

                Approximate starting salary:
                <strong>${course.salary}</strong>

            </p>

            <p>

                Actual salary can vary significantly
                depending on role, city, institution,
                employer, experience and skills.

            </p>

        </div>


        <div class="modal-section">

            <h3>
                🛣️ Typical Pathway
            </h3>

            <p>

                Class 12 → Entrance / Admission →
                ${course.name} → Skills / Higher Studies →
                Career

            </p>

        </div>

    `;


    modal.classList.remove("hidden");

}



function closeModal() {

    document
        .getElementById("courseModal")
        .classList.add("hidden");

}



document.addEventListener(
    "click",
    function(event) {

        const modal =
            document.getElementById("courseModal");

        if (
            event.target === modal
        ) {

            closeModal();

        }

    }
);



/* =====================================================
   STREAM DETAILS
===================================================== */

function showStream(stream) {

    const box =
        document.getElementById("streamDetails");


    const data = {

        Science: {

            icon: "🔬",

            title: "Science",

            subjects:
                "Physics, Chemistry, Mathematics and/or Biology.",

            courses:
                "MBBS, BDS, B.Tech, B.Sc, B.Pharm, Nursing, Agriculture, Biotechnology, Forensic Science, BCA and many others.",

            exams:
                "NEET-UG, JEE Main, JEE Advanced, CUET-UG, IAT, NEST, state CETs and university exams.",

            careers:
                "Doctor, Engineer, Scientist, Researcher, Pharmacist, Data Professional, Biotechnologist and more."

        },


        Commerce: {

            icon: "📊",

            title: "Commerce",

            subjects:
                "Accountancy, Business Studies, Economics, Mathematics/Informatics Practices and languages.",

            courses:
                "B.Com, B.Com Honours, BBA, BMS, Economics, CA, CMA and management programs.",

            exams:
                "CUET-UG, IPMAT, JIPMAT, NPAT, SET, CA Foundation and university exams.",

            careers:
                "Accountant, Banker, Financial Analyst, Manager, Entrepreneur, Economist and more."

        },


        Humanities: {

            icon: "📚",

            title: "Humanities / Arts",

            subjects:
                "History, Political Science, Sociology, Psychology, Geography, Economics and languages.",

            courses:
                "BA Psychology, BA History, BA Political Science, Journalism, Law, Design and social science programs.",

            exams:
                "CUET-UG, CLAT, AILET, NID DAT, NIFT, UCEED and university exams.",

            careers:
                "Lawyer, Teacher, Researcher, Psychologist pathway, Journalist, Designer, Policy roles and more."

        },


        Vocational: {

            icon: "🛠️",

            title: "Vocational & Skill Education",

            subjects:
                "Practical, technical and occupation-focused learning.",

            courses:
                "IT, hospitality, healthcare assistance, retail, electrical and other skill programs.",

            exams:
                "Admission depends on course, state and institution.",

            careers:
                "Technician, Hospitality Worker, IT Support, Healthcare Assistant and skilled trades."

        },


        Diploma: {

            icon: "⚙️",

            title: "Diploma / Polytechnic",

            subjects:
                "Engineering and technical subjects.",

            courses:
                "Diploma in Mechanical, Civil, Electrical, Computer and other engineering areas.",

            exams:
                "State/polytechnic admission procedures vary.",

            careers:
                "Technician, Junior Technical Roles, Maintenance and pathways to B.Tech."

        },


        ITI: {

            icon: "🔧",

            title: "ITI",

            subjects:
                "Trade-based technical education.",

            courses:
                "Electrician, Fitter, Mechanic, Welder, COPA and other trades.",

            exams:
                "ITI admission processes vary by state.",

            careers:
                "Technician, Electrician, Mechanic, Maintenance and apprenticeship pathways."

        }

    };


    const selected =
        data[stream];


    box.innerHTML = `

        <h3>

            ${selected.icon}
            ${selected.title}

        </h3>


        <p>

            <strong>
                Main Subjects:
            </strong>

            ${selected.subjects}

        </p>


        <p>

            <strong>
                Possible Courses:
            </strong>

            ${selected.courses}

        </p>


        <p>

            <strong>
                Entrance Exams:
            </strong>

            ${selected.exams}

        </p>


        <p>

            <strong>
                Career Options:
            </strong>

            ${selected.careers}

        </p>

    `;


    box.classList.remove("hidden");


    box.scrollIntoView({
        behavior: "smooth"
    });

}



/* =====================================================
   EXAM RENDERING
===================================================== */

function renderExams() {

    const grid =
        document.getElementById("examGrid");


    if (!grid) return;


    grid.innerHTML = "";


    exams.forEach(function(exam) {

        const card =
            document.createElement("div");


        card.className =
            "exam-card";


        card.innerHTML = `

            <div class="exam-icon">
                ${exam.icon}
            </div>

            <h3>
                ${exam.name}
            </h3>

            <p>
                ${exam.description}
            </p>

            <span class="exam-tag">
                ${exam.category}
            </span>

            <span class="exam-tag">
                ${exam.for}
            </span>

        `;


        grid.appendChild(card);

    });

}



/* =====================================================
   COLLEGE RENDERING
===================================================== */

function renderColleges(list = colleges) {

    const grid =
        document.getElementById("collegeGrid");


    if (!grid) return;


    grid.innerHTML = "";


    list.forEach(function(college) {

        const card =
            document.createElement("div");


        card.className =
            "college-card";


        card.innerHTML = `

            <span class="college-type">

                ${college.type}

            </span>


            <h3>
                ${college.name}
            </h3>


            <p>
                📍 ${college.city}
            </p>


            <p>
                📚 ${college.courses}
            </p>

        `;


        grid.appendChild(card);

    });

}



/* =====================================================
   COLLEGE SEARCH
===================================================== */

function filterColleges() {

    const search =
        document
            .getElementById("collegeSearch")
            .value
            .toLowerCase();


    const filtered =
        colleges.filter(function(college) {

            return (

                college.name
                    .toLowerCase()
                    .includes(search)

                ||

                college.city
                    .toLowerCase()
                    .includes(search)

                ||

                college.courses
                    .toLowerCase()
                    .includes(search)

            );

        });


    renderColleges(filtered);

}



/* =====================================================
   CAREER QUIZ
===================================================== */

const quizQuestions = [

    {

        question:
            "Which activity do you enjoy most?",

        answers: [

            {
                text: "Understanding biology and helping people",
                area: "Healthcare"
            },

            {
                text: "Building things or solving technical problems",
                area: "Technology"
            },

            {
                text: "Understanding business and money",
                area: "Business"
            },

            {
                text: "Writing, history and understanding society",
                area: "Humanities"
            }

        ]

    },


    {

        question:
            "Which subject interests you most?",

        answers: [

            {
                text: "Biology",
                area: "Healthcare"
            },

            {
                text: "Mathematics / Computer Science",
                area: "Technology"
            },

            {
                text: "Accountancy / Economics",
                area: "Business"
            },

            {
                text: "History / Psychology",
                area: "Humanities"
            }

        ]

    },


    {

        question:
            "What kind of work sounds interesting?",

        answers: [

            {
                text: "Hospital or laboratory",
                area: "Healthcare"
            },

            {
                text: "Technology company",
                area: "Technology"
            },

            {
                text: "Business or finance organisation",
                area: "Business"
            },

            {
                text: "Media, law or public organisation",
                area: "Humanities"
            }

        ]

    },


    {

        question:
            "Which skill would you like to develop?",

        answers: [

            {
                text: "Scientific thinking",
                area: "Healthcare"
            },

            {
                text: "Programming and problem solving",
                area: "Technology"
            },

            {
                text: "Leadership and management",
                area: "Business"
            },

            {
                text: "Communication and writing",
                area: "Humanities"
            }

        ]

    },


    {

        question:
            "What kind of problems do you like solving?",

        answers: [

            {
                text: "Health-related problems",
                area: "Healthcare"
            },

            {
                text: "Technical problems",
                area: "Technology"
            },

            {
                text: "Business problems",
                area: "Business"
            },

            {
                text: "Social problems",
                area: "Humanities"
            }

        ]

    },


    {

        question:
            "Which career sounds interesting?",

        answers: [

            {
                text: "Doctor or healthcare professional",
                area: "Healthcare"
            },

            {
                text: "Engineer or software developer",
                area: "Technology"
            },

            {
                text: "Manager or financial professional",
                area: "Business"
            },

            {
                text: "Lawyer, journalist or researcher",
                area: "Humanities"
            }

        ]

    },


    {

        question:
            "Which environment would you prefer?",

        answers: [

            {
                text: "Hospital or research lab",
                area: "Healthcare"
            },

            {
                text: "Technology or engineering workplace",
                area: "Technology"
            },

            {
                text: "Company or financial institution",
                area: "Business"
            },

            {
                text: "Court, media or public organisation",
                area: "Humanities"
            }

        ]

    },


    {

        question:
            "What motivates you most?",

        answers: [

            {
                text: "Helping people",
                area: "Healthcare"
            },

            {
                text: "Innovation",
                area: "Technology"
            },

            {
                text: "Business growth",
                area: "Business"
            },

            {
                text: "Social impact",
                area: "Humanities"
            }

        ]

    },


    {

        question:
            "What would you like to create?",

        answers: [

            {
                text: "Better healthcare",
                area: "Healthcare"
            },

            {
                text: "New technology",
                area: "Technology"
            },

            {
                text: "A successful business",
                area: "Business"
            },

            {
                text: "Ideas and social change",
                area: "Humanities"
            }

        ]

    },


    {

        question:
            "Which description fits you best?",

        answers: [

            {
                text: "I like science and people",
                area: "Healthcare"
            },

            {
                text: "I like computers and logic",
                area: "Technology"
            },

            {
                text: "I like business and numbers",
                area: "Business"
            },

            {
                text: "I like society, communication and ideas",
                area: "Humanities"
            }

        ]

    }

];


let currentQuestion = 0;

let selectedAnswer = null;

let quizScores = {

    Healthcare: 0,

    Technology: 0,

    Business: 0,

    Humanities: 0

};



/* =====================================================
   LOAD QUIZ
===================================================== */

function loadQuestion() {

    const question =
        quizQuestions[currentQuestion];


    document.getElementById(
        "question"
    ).textContent =
        question.question;


    document.getElementById(
        "questionNumber"
    ).textContent =

        `Question ${currentQuestion + 1}
         of ${quizQuestions.length}`;


    document.getElementById(
        "progressBar"
    ).style.width =

        `${((currentQuestion + 1) /
        quizQuestions.length) * 100}%`;


    const answers =
        document.getElementById(
            "answers"
        );


    answers.innerHTML = "";


    selectedAnswer = null;


    question.answers.forEach(function(answer) {

        const button =
            document.createElement("button");


        button.className =
            "answer-button";


        button.textContent =
            answer.text;


        button.onclick = function() {

            document
                .querySelectorAll(
                    ".answer-button"
                )
                .forEach(function(btn) {

                    btn.classList.remove(
                        "selected"
                    );

                });


            button.classList.add(
                "selected"
            );


            selectedAnswer =
                answer.area;

        };


        answers.appendChild(button);

    });


    document.getElementById(
        "nextButton"
    ).textContent =

        currentQuestion ===
        quizQuestions.length - 1

        ? "See My Results 🎯"

        : "Next →";

}



/* =====================================================
   NEXT QUIZ QUESTION
===================================================== */

function nextQuestion() {

    if (!selectedAnswer) {

        alert(
            "Please select an answer first."
        );

        return;

    }


    quizScores[selectedAnswer]++;


    if (
        currentQuestion <
        quizQuestions.length - 1
    ) {

        currentQuestion++;

        loadQuestion();

    }

    else {

        showQuizResult();

    }

}



/* =====================================================
   QUIZ RESULT
===================================================== */

function showQuizResult() {

    document
        .querySelector(".quiz-card")
        .classList.add("hidden");


    const result =
        document.getElementById(
            "quizResult"
        );


    result.classList.remove(
        "hidden"
    );


    const sorted =
        Object.entries(
            quizScores
        ).sort(
            function(a, b) {
                return b[1] - a[1];
            }
        );


    const topAreas =
        sorted.slice(0, 3);


    const descriptions = {

        Healthcare:
            "Explore Medicine, Nursing, Pharmacy, Biotechnology and other health-related fields.",

        Technology:
            "Explore Engineering, Computer Science, BCA, AI, Data Science and technology careers.",

        Business:
            "Explore Commerce, Finance, Management, BBA, Economics and entrepreneurship.",

        Humanities:
            "Explore Law, Psychology, Journalism, History, Political Science and social sciences."

    };


    let html = `

        <h2>
            🎯 Your Career Exploration Areas
        </h2>

        <p>

            These areas are based on your quiz
            responses. They are starting points
            for exploration, not final career decisions.

        </p>

    `;


    topAreas.forEach(function(area, index) {

        html += `

            <div class="result-career">

                <h3>
                    ${index + 1}.
                    ${area[0]}
                </h3>

                <p>
                    ${descriptions[area[0]]}
                </p>

            </div>

        `;

    });


    html += `

        <p>

            <strong>
                Important:
            </strong>

            Consider your academic performance,
            interests, financial circumstances,
            goals and guidance from parents,
            teachers and qualified counsellors.

        </p>

        <br>

        <button
            class="primary-btn"
            onclick="restartQuiz()">

            Take Quiz Again

        </button>

    `;


    result.innerHTML = html;

}



/* =====================================================
   RESTART QUIZ
===================================================== */

function restartQuiz() {

    currentQuestion = 0;

    selectedAnswer = null;


    quizScores = {

        Healthcare: 0,

        Technology: 0,

        Business: 0,

        Humanities: 0

    };


    document
        .querySelector(".quiz-card")
        .classList.remove("hidden");


    document
        .getElementById("quizResult")
        .classList.add("hidden");


    loadQuestion();

}



/* =====================================================
   DARK MODE
===================================================== */

function toggleDarkMode() {

    document
        .body
        .classList.toggle("dark");


    const button =
        document.getElementById(
            "themeButton"
        );


    if (
        document.body.classList.contains(
            "dark"
        )
    ) {

        button.textContent = "☀️";

        localStorage.setItem(
            "careerPathDarkMode",
            "true"
        );

    }

    else {

        button.textContent = "🌙";

        localStorage.setItem(
            "careerPathDarkMode",
            "false"
        );

    }

}



/* =====================================================
   LOAD SAVED DARK MODE
===================================================== */

function loadTheme() {

    const dark =
        localStorage.getItem(
            "careerPathDarkMode"
        );


    if (dark === "true") {

        document
            .body
            .classList.add("dark");


        document.getElementById(
            "themeButton"
        ).textContent = "☀️";

    }

}



/* =====================================================
   INITIALIZE WEBSITE
===================================================== */

document.addEventListener(
    "DOMContentLoaded",
    function() {

        loadTheme();

        loadQuestion();

        renderCourses();

        renderExams();

        renderColleges();

    }
);