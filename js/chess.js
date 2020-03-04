const chess = {
    gameContainerEl: document.getElementById('game'),
    render() {
        // Названия колонок
        const cols = [" ", 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', " "];
        const figureWhite = ["&#9814;", "&#9816;", "&#9815;", "&#9813;", "&#9812;", "&#9815;", "&#9816;", "&#9814;", "&#9817;"];
        const figureBlack = ["&#9820;", "&#9822;", "&#9821;", "&#9819;", "&#9818;", "&#9821;", "&#9822;", "&#9820;", "&#9823;"];

        // Цикл для строк
        for (let row = 0; row < 10; row++) {
            // Создаем и добавляем строку.
            const tr = document.createElement('tr');
            this.gameContainerEl.appendChild(tr);

            // Добавляем ячейки в строку.
            for (let col = 0; col < 10; col++) {
                // Создаем и добавляем ячейку.
                const td = document.createElement('td');
                tr.appendChild(td);


                // Если строка нулевая (первая по счету), значит выводим буквы в ней.
                // Нули из массива с названиями колонок не выводим, они нам не нужны.
                if ((row === 0 && cols[col] !== 0) || (row === 9 && cols[col] !== 9)) {
                    td.innerHTML = cols[col];
                }

                if (row === 1 && cols[col] !== 9) {
                    td.innerHTML = figureWhite[col - 1];
                }

                if (row === 2 && cols[col] !== 9) {
                    td.innerHTML = figureWhite[8];
                }

                if (row === 8 && cols[col] !== 9) {
                    td.innerHTML = figureBlack[col - 1];
                }

                if (row === 7 && cols[col] !== 9) {
                    td.innerHTML = figureBlack[8];
                }

                if ((col === 0 && (row !== 0 && row !== 9)) || (col === 9 && (row !== 0 && row !== 9))) {
                    td.innerHTML = row;
                }

                // Проверяем, надо ли покрасить ячейку, передаем строку и колонку.
                if (this.isCellIsBlack(row, col)) {
                    td.style.backgroundColor = 'grey';
                }
            }
        }
    },

    // Метод определяет нужно ли покрасить ячейку.
    // Просто для примера покрасим ячейки, строки которых делятся на 2 с остатком.
    isCellIsBlack(rowNum, colNum) {
        if (((rowNum % 2 && colNum % 2) || ((rowNum % 2 === 0) && (colNum % 2 === 0))) && ((rowNum !== 0 && rowNum !== 9) && (colNum !== 0 && colNum !== 9))) {
            // Если будет остаток, то он даст true в условии, а если не будет, то 0 даст false в условии.
            return true;
        }
    },
};

// Запускаем метод render.
chess.render();