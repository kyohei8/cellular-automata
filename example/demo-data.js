module.exports = [
    {
        gridWidth: 300,
        gridHeight: 100,
        automaton: 'fractalLike',
        step: 250,
        lifetime: 60,
        borderColors: [ [ 0, 0 ] ],
        fillColors: [
            [ 0, 0 ],
            [ 0x2b8ae2, 0.3 ],
            [ 0x8a2be2, 1.0 ],
            [ 0x8a2be2, 0.6 ]
        ],
        cells: [
            [ 149, 49, 2 ],
            [ 151, 51, 1 ]
        ]
    },
    {
        gridWidth: 120,
        gridHeight: 40,
        automaton: 'briansBrain',
        step: 125,
        lifetime: 100,
        borderColors: [ [ 0, 0 ] ],
        fillColors: [
            [ 0, 0 ],
            [ 0x17bb54, 0.8 ],
            [ 0x17bb54, 0.5 ]
        ],
        randomCells: true
    },
    {
        gridWidth: 150,
        gridHeight: 50,
        automaton: 'highLife',
        step: 40,
        lifetime: 380,
        borderColors: [ [ 0xbb5417, 0.1 ] ],
        fillColors: [
            [ 0, 0 ],
            [ 0xbb5417, 0.8 ]
        ],
        cells: [
            // Replicator
            [ 72, 25, 1 ],
            [ 73, 24, 1 ],
            [ 74, 23, 1 ],
            [ 75, 23, 1 ],
            [ 76, 23, 1 ],
            [ 76, 24, 1 ],
            [ 76, 25, 1 ],
            [ 75, 26, 1 ],
            [ 74, 27, 1 ],
            [ 73, 27, 1 ],
            [ 72, 27, 1 ],
            [ 72, 26, 1 ]
        ]
    },
    {
        gridWidth: 150,
        gridHeight: 50,
        automaton: 'gameOfLife',
        step: 80,
        lifetime: 500,
        borderColors: [ [ 0x1754bb, 0.1 ] ],
        fillColors: [],
        cells: [
            // R-Pentomino
            [ 74, 25, 1 ],
            [ 75, 24, 1 ],
            [ 75, 25, 1 ],
            [ 75, 26, 1 ],
            [ 76, 24, 1 ]
        ]
    },
    {
        gridWidth: 38,
        gridHeight: 13,
        automaton: 'wireworld',
        step: 250,
        lifetime: 100,
        borderColors: [
            [ 0xffffff, 0.1 ],
            [ 0, 0.8 ],
            [ 0, 0.8 ],
            [ 0, 0.8 ]
        ],
        fillColors: [
            [ 0, 0 ],
            [ 0x0080ff, 1.0 ],
            [ 0xff4000, 1.0 ],
            [ 0xffd700, 1.0 ]
        ],
        cells: [
            // conductors
            [ 2, 3, 3 ],
            [ 3, 2, 3 ],
            [ 4, 2, 3 ],
            [ 5, 2, 3 ],
            [ 6, 2, 3 ],
            [ 7, 2, 3 ],
            [ 8, 2, 3 ],
            [ 9, 2, 3 ],
            [ 10, 2, 3 ],
            [ 3, 4, 3 ],
            [ 4, 4, 3 ],
            [ 5, 4, 3 ],
            [ 6, 4, 3 ],
            [ 7, 4, 3 ],
            [ 8, 4, 3 ],
            [ 9, 4, 3 ],
            [ 10, 4, 3 ],
            [ 11, 3, 3 ],
            [ 12, 3, 3 ],
            [ 13, 3, 3 ],
            [ 14, 3, 3 ],
            [ 15, 3, 3 ],
            [ 16, 3, 3 ],

            [ 2, 9, 3 ],
            [ 3, 8, 3 ],
            [ 4, 8, 3 ],
            [ 5, 8, 3 ],
            [ 6, 8, 3 ],
            [ 7, 8, 3 ],
            [ 8, 8, 3 ],
            [ 9, 8, 3 ],
            [ 10, 8, 3 ],
            [ 3, 10, 3 ],
            [ 4, 10, 3 ],
            [ 5, 10, 3 ],
            [ 6, 10, 3 ],
            [ 7, 10, 3 ],
            [ 8, 10, 3 ],
            [ 9, 10, 3 ],
            [ 10, 10, 3 ],
            [ 11, 9, 3 ],
            [ 12, 9, 3 ],
            [ 13, 9, 3 ],
            [ 14, 9, 3 ],
            [ 15, 9, 3 ],
            [ 16, 9, 3 ],

            // XOR-Gate
            [ 17, 4, 3 ],
            [ 17, 8, 3 ],
            [ 16, 6, 3 ],
            [ 19, 6, 3 ],
            [ 16, 5, 3 ],
            [ 17, 5, 3 ],
            [ 18, 5, 3 ],
            [ 19, 5, 3 ],
            [ 16, 7, 3 ],
            [ 17, 7, 3 ],
            [ 18, 7, 3 ],
            [ 19, 7, 3 ],
            [ 20, 6, 3 ],
            [ 21, 6, 3 ],
            [ 22, 6, 3 ],
            [ 23, 6, 3 ],
            [ 24, 6, 3 ],
            [ 25, 5, 3 ],
            [ 25, 4, 3 ],
            [ 25, 7, 3 ],
            [ 25, 8, 3 ],

            // Diodes
            [ 26, 3, 3 ],
            [ 27, 3, 3 ],
            [ 28, 3, 3 ],
            [ 29, 2, 3 ],
            [ 31, 3, 3 ],
            [ 29, 4, 3 ],
            [ 30, 2, 3 ],
            [ 31, 2, 3 ],
            [ 30, 4, 3 ],
            [ 31, 4, 3 ],
            [ 32, 3, 3 ],
            [ 33, 3, 3 ],
            [ 34, 3, 3 ],
            [ 35, 3, 3 ],
            [ 36, 3, 3 ],
            [ 37, 3, 3 ],

            [ 26, 9, 3 ],
            [ 27, 9, 3 ],
            [ 28, 9, 3 ],
            [ 29, 8, 3 ],
            [ 29, 9, 3 ],
            [ 29, 10, 3 ],
            [ 30, 8, 3 ],
            [ 31, 8, 3 ],
            [ 30, 10, 3 ],
            [ 31, 10, 3 ],
            [ 32, 9, 3 ],
            [ 33, 9, 3 ],
            [ 34, 9, 3 ],
            [ 35, 9, 3 ],
            [ 36, 9, 3 ],
            [ 37, 9, 3 ],

            // initial electrons
            [ 8, 2, 2 ],
            [ 9, 2, 1 ],
            [ 7, 4, 1 ],
            [ 8, 4, 2 ],
            [ 8, 8, 2 ],
            [ 9, 8, 1 ],
            [ 3, 8, 1 ],
            [ 2, 9, 2 ]
        ]
    }
];