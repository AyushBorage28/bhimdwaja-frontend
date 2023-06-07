const categories = [
    {
        id: 'one-mukhi',
        name: '1 Mukhi',
        description: 'vngksdjb',
        image: 'https://bhidhwaja-images.s3.amazonaws.com/Website+Images/1-mukhi.png'
    },
    {
        id: 'two-mukhi',
        name: '2 Mukhi',
        description: 'vngksdjb',
        image: 'https://bhidhwaja-images.s3.amazonaws.com/Website+Images/2-mukhi.png'
    },
    {
        id: 'three-mukhi',
        name: '3 Mukhi',
        description: 'vngksdjb',
        image: 'https://bhidhwaja-images.s3.amazonaws.com/Website+Images/3-mukhi.png'
    },
    {
        id: 'four-mukhi',
        name: '4 Mukhi',
        description: 'vngksdjb',
        image: 'https://bhidhwaja-images.s3.amazonaws.com/Website+Images/4-mukhi.png'
    },
    {
        id: 'five-mukhi',
        name: '5 Mukhi',
        description: 'vngksdjb',
        image: 'https://bhidhwaja-images.s3.amazonaws.com/Website+Images/5-mukhi.png'
    },
    {
        id: 'six-mukhi',
        name: '6 Mukhi',
        description: 'vngksdjb',
        image: 'https://bhidhwaja-images.s3.amazonaws.com/Website+Images/6-mukhi.png'
    },
    {
        id: 'seven-mukhi',
        name: '7 Mukhi',
        description: 'vngksdjb',
        image: 'https://bhidhwaja-images.s3.amazonaws.com/Website+Images/7-mukhi.png'
    },
    {
        id: 'eight-mukhi',
        name: '8 Mukhi',
        description: 'vngksdjb',
        image: 'https://bhidhwaja-images.s3.amazonaws.com/Website+Images/8-mukhi.png'
    },
    {
        id: 'nine-mukhi',
        name: '9 Mukhi',
        description: 'vngksdjb',
        image: 'https://bhidhwaja-images.s3.amazonaws.com/Website+Images/9-mukhi.png'
    },
    {
        id: 'ten-mukhi',
        name: '10 Mukhi',
        description: 'vngksdjb',
        image: 'https://bhidhwaja-images.s3.amazonaws.com/Website+Images/10-mukhi.png'
    },
    {
        id: 'eleven-mukhi',
        name: '11 Mukhi',
        description: 'vngksdjb',
        image: 'https://bhidhwaja-images.s3.amazonaws.com/Website+Images/11-mukhi.png'
    },
    {
        id: 'twelve-mukhi',
        name: '12 Mukhi',
        description: 'vngksdjb',
        image: 'https://bhidhwaja-images.s3.amazonaws.com/Website+Images/12-mukhi.png'
    },
    {
        id: 'thirteen-mukhi',
        name: '13 Mukhi',
        description: 'vngksdjb',
        image: 'https://bhidhwaja-images.s3.amazonaws.com/Website+Images/13-mukhi.png'
    },
    {
        id: 'fourteen-mukhi',
        name: '14 Mukhi',
        description: 'vngksdjb',
        image: 'https://bhidhwaja-images.s3.amazonaws.com/Website+Images/14-mukhi.png'
    },
    {
        id: 'fifteen-mukhi',
        name: '15 Mukhi',
        description: 'vngksdjb',
        image: 'https://bhidhwaja-images.s3.amazonaws.com/Website+Images/15-mukhi.png'
    },
    {
        id: 'sixteen-mukhi',
        name: '16 Mukhi',
        description: 'vngksdjb',
        image: 'https://bhidhwaja-images.s3.amazonaws.com/Website+Images/16-mukhi.png'
    },
    {
        id: 'seventeen-mukhi',
        name: '17 Mukhi',
        description: 'vngksdjb',
        image: 'https://bhidhwaja-images.s3.amazonaws.com/Website+Images/17-mukhi.png'
    },
    {
        id: 'eighteen-mukhi',
        name: '18 Mukhi',
        description: 'vngksdjb',
        image: 'https://bhidhwaja-images.s3.amazonaws.com/Website+Images/18-mukhi.png'
    },
    {
        id: 'nineteen-mukhi',
        name: '19 Mukhi',
        description: 'vngksdjb',
        image: 'https://bhidhwaja-images.s3.amazonaws.com/Website+Images/19-mukhi.png'
    },
    {
        id: 'twenty-mukhi',
        name: '20 Mukhi',
        description: 'vngksdjb',
        image: 'https://bhidhwaja-images.s3.amazonaws.com/Website+Images/20-mukhi.png'
    },
    {
        id: 'twentyone-mukhi',
        name: '21 Mukhi',
        description: 'vngksdjb',
        image: 'https://bhidhwaja-images.s3.amazonaws.com/Website+Images/21-mukhi.png'
    },
    {
        id: 'gauri-shankar',
        name: 'Gauri Shankar',
        description: 'vngksdjb',
        image: 'https://bhidhwaja-images.s3.amazonaws.com/Website+Images/gauri-shankar.png'
    },
    {
        id: 'trijuti-rudraksha',
        name: 'Trijuti Rudraksha',
        description: 'vngksdjb',
        image: 'https://bhidhwaja-images.s3.amazonaws.com/Website+Images/trijuti.png'
    },
    {
        id: 'one-mukhi-savar',
        name: '1 Mukhi Savar',
        description: 'vngksdjb',
        image: 'https://bhidhwaja-images.s3.amazonaws.com/Website+Images/savar.png'
    },
    {
        id: 'ganesha-rudraksha',
        name: 'Ganesha Rudraksha',
        description: 'vngksdjb',
        image: 'https://bhidhwaja-images.s3.amazonaws.com/Website+Images/ganesha.png'
    },
    {
        id: 'garbha-gauri-rudraksha',
        name: 'Garbha Gauri Rudraksha',
        description: 'vngksdjb',
        image: 'https://bhidhwaja-images.s3.amazonaws.com/Website+Images/garbha-gauri.png'
    },
    {
        id: 'rudraksha-mala',
        name: 'Rudraksha Mala',
        description: 'vngksdjb',
        image: 'https://bhidhwaja-images.s3.amazonaws.com/Website+Images/mala.png'
    },
    {
        id: 'gems',
        name: 'Gems',
        description: 'vngksdjb',
        image: 'https://bhidhwaja-images.s3.amazonaws.com/Website+Images/gem.png'
    },
]

export default categories