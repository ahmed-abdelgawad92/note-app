import { MenuItem } from "./menu-item.model";

export class HomeService{
    private gridMenu: MenuItem[];
    constructor(){
        this.gridMenu = [
            new MenuItem('Welcome to Our Note App', 'Here you will never forget something on the way, our note app will be accessible everywhere, sign up now and start writting nice notes.','assets/note.png'),
            new MenuItem('Welcome to Our Note App', 'Here you will never forget something on the way, our note app will be accessible everywhere, sign up now and start writting nice notes.','assets/note.png'),
            new MenuItem('Welcome to Our Note App', 'Here you will never forget something on the way, our note app will be accessible everywhere, sign up now and start writting nice notes.','assets/note.png'),
            new MenuItem('Welcome to Our Note App', 'Here you will never forget something on the way, our note app will be accessible everywhere, sign up now and start writting nice notes.','assets/note.png'),
            new MenuItem('Welcome to Our Note App', 'Here you','assets/note.png')
        ];
    }
    getGridMenu(){
        return this.gridMenu.slice();
    }
}