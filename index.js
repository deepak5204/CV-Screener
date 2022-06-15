

//this is array of objects which contains information of candidates

const data = [
    {
        name: "Rohan Das",
        age: 21,
        city: 'kolkata',
        language: "Python",
        framework: 'Django',
        image: 'https://randomuser.me/api/portraits/men/15.jpg'
    },
    {
        name: "Ravi kumar",
        age: 26,
        city: 'Mumbai',
        language: "JavaScript",
        framework: 'reactJS',
        image: 'https://randomuser.me/api/portraits/men/35.jpg'
    },
    {
        name: "Ruchita Verma",
        age: 23,
        city: 'Bhopal',
        language: "Nodejs",
        framework: 'Express',
        image: 'https://randomuser.me/api/portraits/women/44.jpg'
    },
    {
        name: "Monty jain",
        age: 27,
        city: 'Faridabad',
        language: "C",
        framework: '.NET',
        image: 'https://randomuser.me/api/portraits/men/12.jpg'
    },
    {
        name: "Ishita kumari",
        age: 22,
        city: 'Hydrabad',
        language: "Java",
        framework: 'Spring Boot',
        image: 'https://randomuser.me/api/portraits/women/28.jpg'
    },
     {
        name: "naresh kumar",
        age: 20,
        city: 'Cuttuk',
        language: "CSS",
        framework: 'Tailwind',
        image: 'https://randomuser.me/api/portraits/men/49.jpg'
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

const candidates = cvIterator(data);

// Button listner for next button
const next = document.getElementById('next');
next.addEventListener('click',nextCV);


function nextCV(){
    const currentCandidate = candidates.next().value;
    let image = document.getElementById('image');
    console.log(image);
    
    image.innerHTML = `<img src='${currentCandidate.image}'>`;
    let profiles = document.getElementById('profiles');
    console.log(profiles);
    
    profiles.innerHTML = `
                        <ul class="list-group">
                        <li class="list-group-item">Name:${currentCandidate.name}</li>
                        <li class="list-group-item">${currentCandidate.age} years old</li>
                        <li class="list-group-item">Lives in ${currentCandidate.city}</li>
                        <li class="list-group-item">Primarily works on ${currentCandidate.language}</li>
                        <li class="list-group-item">${currentCandidate.framework} framework </li>
                        </ul>
  `
}
