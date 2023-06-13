const categories = [
    {
        id: 'one-mukhi',
        name: '1 Mukhi Rudraksha',
        description: 'vngksdjb',
        image: 'https://bhidhwaja-images.s3.amazonaws.com/Website+Images/1-mukhi.jpg'
    },
    {
        id: 'two-mukhi',
        name: '2 Mukhi Rudraksha',
        description: 'vngksdjb',
        image: 'https://bhidhwaja-images.s3.amazonaws.com/Website+Images/2-mukhi.jpg'
    },
    {
        id: 'three-mukhi',
        name: '3 Mukhi Rudraksha',
        description: 'vngksdjb',
        image: 'https://bhidhwaja-images.s3.amazonaws.com/Website+Images/3-mukhi.jpg'
    },
    {
        id: 'four-mukhi',
        name: '4 Mukhi Rudraksha',
        description: 'vngksdjb',
        image: 'https://bhidhwaja-images.s3.amazonaws.com/Website+Images/4-mukhi.jpg'
    },
    {
        id: 'five-mukhi',
        name: '5 Mukhi Rudraksha',
        description: 'vngksdjb',
        image: 'https://bhidhwaja-images.s3.amazonaws.com/Website+Images/5-mukhi.jpg'
    },
    {
        id: 'six-mukhi',
        name: '6 Mukhi Rudraksha',
        description: 'vngksdjb',
        image: 'https://bhidhwaja-images.s3.amazonaws.com/Website+Images/6-mukhi.jpg'
    },
    {
        id: 'seven-mukhi',
        name: '7 Mukhi Rudraksha',
        description: 'vngksdjb',
        image: 'https://bhidhwaja-images.s3.amazonaws.com/Website+Images/7-mukhi.jpg'
    },
    {
        id: 'eight-mukhi',
        name: '8 Mukhi Rudraksha',
        description: 'vngksdjb',
        image: 'https://bhidhwaja-images.s3.amazonaws.com/Website+Images/8-mukhi.jpg'
    },
    {
        id: 'nine-mukhi',
        name: '9 Mukhi Rudraksha',
        description: 'vngksdjb',
        image: 'https://bhidhwaja-images.s3.amazonaws.com/Website+Images/9-mukhi.jpg'
    },
    {
        id: 'ten-mukhi',
        name: '10 Mukhi Rudraksha',
        description: 'vngksdjb',
        image: 'https://bhidhwaja-images.s3.amazonaws.com/Website+Images/10-mukhi.jpg'
    },
    {
        id: 'eleven-mukhi',
        name: '11 Mukhi Rudraksha',
        description: 'vngksdjb',
        image: 'https://bhidhwaja-images.s3.amazonaws.com/Website+Images/11-mukhi.jpg'
    },
    {
        id: 'twelve-mukhi',
        name: '12 Mukhi Rudraksha',
        description: 'vngksdjb',
        image: 'https://bhidhwaja-images.s3.amazonaws.com/Website+Images/12-mukhi.jpg'
    },
    {
        id: 'thirteen-mukhi',
        name: '13 Mukhi Rudraksha',
        description: 'vngksdjb',
        image: 'https://bhidhwaja-images.s3.amazonaws.com/Website+Images/13-mukhi.jpg'
    },
    {
        id: 'fourteen-mukhi',
        name: '14 Mukhi Rudraksha',
        description: 'vngksdjb',
        image: 'https://bhidhwaja-images.s3.amazonaws.com/Website+Images/14-mukhi.jpg'
    },
    {
        id: 'fifteen-mukhi',
        name: '15 Mukhi Rudraksha',
        description: 'vngksdjb',
        image: 'https://bhidhwaja-images.s3.amazonaws.com/Website+Images/15-mukhi.jpg'
    },
    {
        id: 'sixteen-mukhi',
        name: '16 Mukhi Rudraksha',
        description: 'vngksdjb',
        image: 'https://bhidhwaja-images.s3.amazonaws.com/Website+Images/16-mukhi.jpg'
    },
    {
        id: 'seventeen-mukhi',
        name: '17 Mukhi Rudraksha',
        description: 'vngksdjb',
        image: 'https://bhidhwaja-images.s3.amazonaws.com/Website+Images/17-mukhi.jpg'
    },
    {
        id: 'eighteen-mukhi',
        name: '18 Mukhi Rudraksha',
        description: 'vngksdjb',
        image: 'https://bhidhwaja-images.s3.amazonaws.com/Website+Images/18-mukhi.jpg'
    },
    {
        id: 'nineteen-mukhi',
        name: '19 Mukhi Rudraksha',
        description: 'vngksdjb',
        image: 'https://bhidhwaja-images.s3.amazonaws.com/Website+Images/19-mukhi.jpg'
    },
    {
        id: 'twenty-mukhi',
        name: '20 Mukhi Rudraksha',
        description: 'vngksdjb',
        image: 'https://bhidhwaja-images.s3.amazonaws.com/Website+Images/20-mukhi.jpg'
    },
    {
        id: 'twentyone-mukhi',
        name: '21 Mukhi Rudraksha',
        description: 'vngksdjb',
        image: 'https://bhidhwaja-images.s3.amazonaws.com/Website+Images/21-mukhi.jpg'
    },
    {
        id: 'gauri-shankar',
        name: 'Gauri Shankar Rudraksha',
        description: 'vngksdjb',
        image: 'https://bhidhwaja-images.s3.amazonaws.com/Website+Images/gauri-shankar.jpg'
    },
    {
        id: 'trijuti-rudraksha',
        name: 'Trijuti Rudraksha',
        description: 'vngksdjb',
        image: 'https://bhidhwaja-images.s3.amazonaws.com/Website+Images/trijuti.jpg'
    },
    {
        id: 'one-mukhi-savar',
        name: '1 Mukhi Rudraksha Savar',
        description: 'vngksdjb',
        image: 'https://bhidhwaja-images.s3.amazonaws.com/Website+Images/savar.jpg'
    },
    {
        id: 'ganesha-rudraksha',
        name: 'Ganesha Rudraksha',
        description: 'vngksdjb',
        image: 'https://bhidhwaja-images.s3.amazonaws.com/Website+Images/ganesha.jpg'
    },
    {
        id: 'garbha-gauri-rudraksha',
        name: 'Garbha Gauri Rudraksha',
        description: 'vngksdjb',
        image: 'https://bhidhwaja-images.s3.amazonaws.com/Website+Images/garbha-gauri.jpg'
    },
    {
        id: 'rudraksha-mala',
        name: 'Rudraksha Mala',
        description: 'vngksdjb',
        image: 'https://bhidhwaja-images.s3.amazonaws.com/Website+Images/mala.jpg'
    },
    {
        id: 'gems',
        name: 'Gems',
        description: 'vngksdjb',
        image: 'https://bhidhwaja-images.s3.amazonaws.com/Website+Images/gem.jpg'
    },
]

export default categories