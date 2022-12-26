export class NavigationModel {
    public navigation: any[];
    constructor() {
      this.navigation = [
        {
          id: 'dashboard',
          title: 'Dashboard',
          type: 'item',
          icon: 'bx bx-home-circle',
          url: '/dashboard'
        },
        {
          id: 'masterData',
          title: 'Master Data',
          type: 'group',
          icon: 'bx bx-user',
          url: '/master-data',
          children: [
            {
              id: 'ingredient',
              title: 'Ingredient',
              type: 'item',
              icon: 'bx bx-user',
              url: '/ingredient'
            }
          ]
        }
      ];
    }
}
