// simple script to listen cell states.
state_1 = [1,2,3];
state_2 = [4,5,6];
state_3 = [7,8,9];

state_4 = [1,4,7];
state_5 = [2,5,8];
state_6 = [3,6,9];

state_7 = [1,5,9];
state_8 = [3,5,7];

function listener(state) {
    f_cell = document.getElementById('cell_'+state[0]).innerText;
    s_cell = document.getElementById('cell_'+state[1]).innerText;
    t_cell = document.getElementById('cell_'+state[2]).innerText;
    if(f_cell == s_cell && s_cell == t_cell) {
        console.log('Game Ended. -> Winner: '+document.getElementById('current_mark').innerText+' | state: '+state);
    }
}

function ListenForWinner(state) {
    listener(state);
}

function PlaceMark(cell_id) {
    mark = document.getElementById('current_mark').innerHTML;
    document.getElementById('cell_'+cell_id).innerText = document.getElementById('current_mark').innerText;
    document.getElementById(cell_id).style.visibility = 'hidden';
    if (mark == 'X') {
        document.getElementById('current_mark').innerText = 'O';
    } 
    if (mark == 'O') {
        document.getElementById('current_mark').innerText = 'X';
    }
        
}

function listenAll() {
    listener(state_1);
    listener(state_2);
    listener(state_3);
    listener(state_4);
    listener(state_5);
    listener(state_6);
    listener(state_7);
    listener(state_8);

}