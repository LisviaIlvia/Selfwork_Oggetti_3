

let bowling = {
    'players': [
        {'name': 'Livio', 'scores': []},
        {'name': 'Paola', 'scores': []},
        {'name': 'Filippo', 'scores': []},
        {'name': 'Giuseppe', 'scores': []}
    ],

    punteggio_random: function() {
        return Math.floor(Math.random() * 10) + 1;
    },

    aggiungi_punteggi: function() {
        this.players.forEach(player => {
            player.scores = []; 
            for (let i = 0; i < 10; i++) {
                player.scores.push(this.punteggio_random());
            }
        });
    },

    calcola_punteggio_finale: function() {
        this.players.forEach(player => {
            player.totalScore = player.scores.reduce((acc, n) => acc + n, 0);  
        });
    },

    new_player: function(name) {
        let nuovoGiocatore = { 'name': name, 'scores': [] };
        for (let i = 0; i < 10; i++) {
            nuovoGiocatore.scores.push(this.punteggio_random());
        }
        this.players.push(nuovoGiocatore);
        console.log(`Nuovo giocatore ${name} aggiunto.`);
    },

    determina_vincitore: function() {
        this.calcola_punteggio_finale();
        let vincitore = this.players.reduce((max, player) => player.totalScore > max.totalScore ? player : max, this.players[0]);
        console.log(`Il vincitore è ${vincitore.name} con un punteggio di ${vincitore.totalScore}`);
    },

    
    stila_classifica: function() {
        this.calcola_punteggio_finale();
        let classifica = [...this.players].sort((a, b) => b.totalScore - a.totalScore);
        console.log("Classifica finale:");
        classifica.forEach((player, i) => {
            console.log(`${i + 1}. ${player.name} - ${player.totalScore}`);
        });
    },

    
    mostra_punteggi: function() {
        this.players.forEach(player => {
            console.log(`${player.name}: ${player.scores.join(', ')}`);
        });
    }
};


bowling.aggiungi_punteggi();
bowling.mostra_punteggi(); 
bowling.stila_classifica();
bowling.determina_vincitore(); 
bowling.new_player('Giovanni'); 
bowling.mostra_punteggi(); 
bowling.stila_classifica(); 
bowling.determina_vincitore();
