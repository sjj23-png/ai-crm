export interface MenuItem {
  id: string;

  title: string;

  icon?: string;

  path?: string;

  permission?: string;

  children?: MenuItem[];
}