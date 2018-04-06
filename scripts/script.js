var movies = [
    {
        id: 1,
        title: 'Harry Potter',
        desc: 'film o czarodzieju',
        poster: 'images/1.jpg'
    },
    {
        id: 2,
        title: 'Auta',
        desc: 'Film o przygodach samochodzików',
        poster: 'images/1.jpg'
    },
    {
        id: 3,
        title: 'Spiderman',
        desc: 'Film o człowieku pająku',
        poster: 'images/3.jpg'
    },
    {
        id: 4,
        title: 'Obcy',
        desc: 'Film o przerażającym kosmicie',
        poster: 'images/4.jpg'
    },
    {
        id: 5,
        title: 'Batman',
        desc: 'Film o człowieku nietoperzu',
        poster: 'images/5.jpg'
    },
];

var moviesElements = movies.map(function (movie) {
    return React.createElement('li', { key: movie.id },
        React.createElement('h2', {}, movie.title),
        React.createElement('p', {}, movie.desc),
        React.createElement('img',  {src: movie.poster})
    );
});

var element =
    React.createElement('div', {},
        React.createElement('h1', {}, 'Lista filmów'),
        React.createElement('ul', {}, moviesElements)
    );

ReactDOM.render(element, document.getElementById('app'));