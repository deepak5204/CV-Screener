

//this is array of objects which contains information of candidates

const data = [
    {
        name: "Rohan Das",
        age: 21,
        city: 'kolkata',
        lanuage: "Python",
        framework: 'Django',
        image: 'https://randomuser.me/api/portraits/men/15.jpg';
    },
    {
        name: "Ravi kumar",
        age: 26,
        city: 'Mumbai',
        lanuage: "JavaScript",
        framework: 'reactJS',
        image: 'https://randomuser.me/api/portraits/men/35.jpg';
    },
    {
        name: "Ruchita Verma",
        age: 23,
        city: 'Bhopal',
        lanuage: "Nodejs",
        framework: 'Express',
        image: 'https://randomuser.me/api/portraits/women/44.jpg';
    },
    {
        name: "Monty jain",
        age: 27,
        city: 'Faridabad',
        lanuage: "C",
        framework: '.NET',
        image: 'https://randomuser.me/api/portraits/men/12.jpg';
    },
    {
        name: "Ishita kumari",
        age: 22,
        city: 'Hydrabad',
        lanuage: "Java",
        framework: 'Spring Boot',
        image: 'https://randomuser.me/api/portraits/women/28.jpg';
    },
     {
        name: "naresh",
        age: 20,
        city: 'Cuttuk',
        lanuage: "CSS",
        framework: 'Tailwind',
        image: 'https://randomuser.me/api/portraits/men/49.jpg';
    }
]


//CV iterator

function cvIterator(profiles){
    let nextIndex = 0;
    return{
        next: function(){
            return nextIndex < profiles.length?
            {value: profiles[nextIndex++], done: false}:
            {done : true}
        }
    }
}

