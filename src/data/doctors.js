// Fake data for doctors description...!
const doctors = [
    {
        id: 1,
        name: 'PROF. DR. MD. RAFIQUL ISLAM',
        specialities: 'Chest',
        group: 'Medicine',
        practiseDay: 'Saturday, Sunday, Monday, Tuesday, Thursday, Friday',
        practiseTime: '10am - 2pm',
        img: 'http://www.medicohospital.com/wp-content/uploads/2017/06/360_F_260040900_oO6YW1sHTnKxby4GcjCvtypUCWjnQRg5.jpg'
    },
    {
        id: 2,
        name: 'ASSOC. PROF. DR. MD. HALIMUR RASHID',
        specialities: 'Chest',
        group: 'Medicine',
        practiseDay: 'Saturday, Sunday, Monday, Tuesday, Thursday, Friday',
        practiseTime: '2pm - 6pm',
        img: 'https://previews.123rf.com/images/stocking/stocking1208/stocking120800324/14748225-portrait-of-an-handsome-smiling-doctor.jpg'
    },
    {
        id: 3,
        name: 'ASST. PROF. DR. HENA KHATUN',
        specialities: 'Eye',
        group: 'Surgery',
        practiseDay: 'Saturday, Sunday, Monday, Tuesday, Thursday, Friday',
        practiseTime: '9am - 1pm',
        img: 'https://images.theconversation.com/files/304957/original/file-20191203-66986-im7o5.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop'
    },
    {
        id: 4,
        name: 'PROF. DR. ROWSHNE JAHAN',
        specialities: 'Eye',
        group: 'Surgery',
        practiseDay: 'Saturday, Sunday, Monday, Tuesday, Thursday, Friday',
        practiseTime: '2pm- 6pm',
        img: 'https://cpb-us-e1.wpmucdn.com/sites.dartmouth.edu/dist/c/922/files/2014/10/doctor.jpg'
    },
    {
        id: 5,
        name: 'ASST. PROF. DR. SHAFIUL ALAM',
        specialities: 'Neuro',
        group: 'Medicine',
        practiseDay: 'Saturday, Monday, Thursday',
        practiseTime: '8am - 12pm',
        img: 'https://lh3.googleusercontent.com/proxy/fVY7ab_BrdUiJNWMJzqb4MKawU0qsLxny8gv9PaMPN_ppVxNL2O7yQZnvegYszhJIlV8Yssg5uL5_n4b3diNSuDmYo-lxcPoOaNIloZxdpy_wTSg7Q'
    },
    {
        id: 6,
        name: 'PROF. DR. MOHAMMAD HOSSAIN',
        specialities: 'Neuro',
        group: 'Surgery',
        practiseDay: 'Sunday, Tuesday, Thursday',
        practiseTime: '7pm - 11pm',
        img: 'https://thumbs.dreamstime.com/b/young-doctor-16088825.jpg'
    },
    {
        id: 7,
        name: 'PROF. DR. NEELIMA CHOWDHARY',
        specialities: 'Gynaecology',
        group: 'Medicine',
        practiseDay: 'Saturday, Sunday, Monday, Tuesday, Wednesday, Thursday, Friday',
        practiseTime: '3pm - 7pm',
        img: 'https://lh3.googleusercontent.com/proxy/TTmjAIDW_FjB8VRps4CT_ewoHQIqAlhtD1X79CyRwvKBuDip9E8moCKGw5akoTGl3xqFRNJ_7wsYsSBFRklMF0STS0naYVxCFr8wApRRObwo4L4lFFqwLBdKee3gV-VCtYEnefTYVdzB3xhR7jsoCmhWo8tQ1Kv-HhACVldLNw'
    },
    {
        id: 8,
        name: 'ASST. PROF. DR. LIZA AKONDO',
        specialities: 'Gynaecology',
        group: 'Surgery',
        practiseDay: 'Saturday, Sunday, Monday',
        practiseTime: '10am - 4pm',
        img: 'https://www.pngkit.com/png/detail/10-100458_female-doctor-png-picture-indian-lady-doctor-png.png'
    },
    {
        id: 9,
        name: 'PROF. DR. NAZMUN NAHER MIM',
        specialities: 'Cholorectal Surgery',
        group: 'Surgery',
        practiseDay: 'Tuesday, Wednesday, Thursday',
        practiseTime: '10am - 2pm',
        img: 'https://image.shutterstock.com/image-photo/arms-crossed-female-doctor-against-260nw-549751753.jpg'
    },
    {
        id: 10,
        name: 'PROF. DR. LOGIC',
        specialities: 'Child',
        group: 'Medicine',
        practiseDay: 'Saturday, Sunday, Monday, Tuesday, Wednesday, Thursday, Friday',
        practiseTime: '10am - 5pm', 
        img: 'https://image.shutterstock.com/image-photo/young-confident-male-doctor-portrait-260nw-622532807.jpg'
    },
    {
        id: 11,
        name: 'PROF. DR. ISTEAK AHMED',
        specialities: 'Liver',
        group: 'Medicine',
        practiseDay: 'Tuesday, Thursday, Friday',
        practiseTime: '5pm - 10pm',
        img: 'https://image.shutterstock.com/image-photo/cheerful-mature-doctor-posing-smiling-260nw-1384243295.jpg'
    },
    {
        id: 12,
        name: 'PROF. DR. IMTIAZ AHMED ROUNOK',
        specialities: 'Vascular Surgery',
        group: 'Surgery',
        practiseDay: 'Saturday, Sunday, Monday, Tuesday, Wednesday, Thursday, Friday',
        practiseTime: '8pm - 12am',
        img: 'https://image.freepik.com/free-photo/doctor-smiling-with-stethoscope_1154-36.jpg'
    },
]