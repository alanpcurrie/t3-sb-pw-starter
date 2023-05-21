import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import * as styles from './styles.css';

export const Nav = () => (
    <NavigationMenu.Root className={styles.navStyle}>
        <NavigationMenu.List>
            <NavigationMenu.Item>
                <NavigationMenu.Trigger>Item one</NavigationMenu.Trigger>
                <NavigationMenu.Content className="NavigationMenuContent">
                    Item one content
                </NavigationMenu.Content>
            </NavigationMenu.Item>
            <NavigationMenu.Item>
                <NavigationMenu.Trigger>Item two</NavigationMenu.Trigger>
                <NavigationMenu.Content className="NavigationMenuContent">
                    Item two content
                </NavigationMenu.Content>
            </NavigationMenu.Item>
        </NavigationMenu.List>

        <NavigationMenu.Viewport className="NavigationMenuViewport" />
    </NavigationMenu.Root>
);
