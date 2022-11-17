// GoControl v2.0.0
// Weslley Thiago (GoApps)
// mail.weslleythiago@gmail.com

const { ipcMain } = require('electron');

module.exports = [
    {
        label: 'Ajuda',
        submenu: [
            {label : 'Início', click : () => { require('./main')("home") }},
            {label : 'Atualizar', click : () => { require('./main')("about") }},
            {role : 'quit'},
        ]
    },
    {
        label: 'Editar',
        submenu: [
            {role : 'undo'},
            {role : 'redo'},
            {role : 'cut'},
            {role : 'copy'},
            {role : 'paste'},
            { type: 'separator' },
            {label : 'Print', click: printPage},
        ]
    },
    {
        label: 'Ver',
        submenu: [
            {role : 'reload'},
            {role : 'zoomIn'},
            {role : 'zoomOut'},
        ]
    },
]

// Print page method
function printPage() {
    ipcMain.emit('printPage')
}