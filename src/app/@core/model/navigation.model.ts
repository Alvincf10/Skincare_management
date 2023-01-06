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
          id: 'product',
          title: 'Product',
          type: 'item',
          icon: 'bx bxl-product-hunt',
          url: '/product'
        },
        {
          id: 'masterData',
          title: 'Master Data',
          type: 'group',
          icon: 'bx bxs-data',
          url: '/master-data',
          children: [
            {
              id: 'ingredient',
              title: 'Ingredient',
              type: 'item',
              icon: 'bx bx-user',
              url: '/ingredient'
            },
            {
              id: 'stock',
              title: 'Stock',
              type: 'item',
              icon: 'bx bx-user',
              url: '/stock'
            },
            {
              id: 'category',
              title: 'Category',
              type: 'item',
              icon: 'bx bx-user',
              url: '/category'
            },
          ]
        }
      ];
    }
}
