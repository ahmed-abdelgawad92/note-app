import { MenuItem } from "./menu-item.model";

export class HomeService{
    private gridMenu: MenuItem[];
    constructor(){
        this.gridMenu = [
            new MenuItem('Welcome to Our Note App', 'Here you will never forget something on the way, our note app will be accessible everywhere, sign up now and start writting nice notes.','http://lh4.ggpht.com/d_uvSBRHPxkVfd_2tbtcJfrnNKSOSip0ovGkeT0BJLlwm998kzeUYgwDmyM_9682j0g=w300'),
            new MenuItem('Welcome to Our Note App', 'Here you will never forget something on the way, our note app will be accessible everywhere, sign up now and start writting nice notes.','http://lh4.ggpht.com/d_uvSBRHPxkVfd_2tbtcJfrnNKSOSip0ovGkeT0BJLlwm998kzeUYgwDmyM_9682j0g=w300'),
            new MenuItem('Welcome to Our Note App', 'Here you will never forget something on the way, our note app will be accessible everywhere, sign up now and start writting nice notes.','http://lh4.ggpht.com/d_uvSBRHPxkVfd_2tbtcJfrnNKSOSip0ovGkeT0BJLlwm998kzeUYgwDmyM_9682j0g=w300'),
            new MenuItem('Welcome to Our Note App', 'Here you will never forget something on the way, our note app will be accessible everywhere, sign up now and start writting nice notes.','http://lh4.ggpht.com/d_uvSBRHPxkVfd_2tbtcJfrnNKSOSip0ovGkeT0BJLlwm998kzeUYgwDmyM_9682j0g=w300'),
            new MenuItem('Welcome to Our Note App', 'Here you','http://lh4.ggpht.com/d_uvSBRHPxkVfd_2tbtcJfrnNKSOSip0ovGkeT0BJLlwm998kzeUYgwDmyM_9682j0g=w300')
        ];
    }
    getGridMenu(){
        return this.gridMenu.slice();
    }
}