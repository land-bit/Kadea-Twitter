import logo from '/Icons/Twitter.svg';
import homeAfter from '/Icons/Home.svg';
import homeBefore from '/Icons/Home-Fill.svg';
import exploreAfter from '/Icons/Explore.svg';
import exploreBefore from '/Icons/Fill.svg';
import notiAfter from '/Icons/Notifications.svg';
import notiBefore from '/Icons/Notifications-Fill.svg';
import messageAfter from '/Icons/Messages.svg';
import messageBefore from '/Icons/Messages-Fill.svg';
import bookmarksAfter from '/Icons/Bookmarks.svg';
import bookmarksBefore from '/Icons/Bookmarks-Fill.svg';
import listsAfter from '/Icons/Lists.svg';
import listsBefore from '/Icons/Lists-Fill.svg';
import profileAfter from '/Icons/Profile.svg';
import profileBefore from '/Icons/Profile-Fill.svg';
import more from '/Icons/More.svg';

export const nav = [
    {
        logoAfter : logo,
    },
    {
        logoAfter : homeAfter,
        logoBefore : homeBefore,
        text : 'Home'
    },
    {
        logoAfter : exploreAfter,
        logoBefore :exploreBefore,
        text : 'Explore'
    },
    {
        logoAfter : notiAfter,
        logoBefore :notiBefore,
        text : 'Notifications'
    },
    {
        logoAfter : messageAfter,
        logoBefore :messageBefore,
        text : 'Messages'
    },
    {
        logoAfter : bookmarksAfter,
        logoBefore :bookmarksBefore,
        text : 'Bookmarks'
    },
    {
        logoAfter : listsAfter,
        logoBefore :listsBefore,
        text : 'Lists'
    },
    {
        logoAfter : profileAfter,
        logoBefore :profileBefore,
        text : 'Profile'
    },
    {
        logoAfter : more,
        text : 'More'
    },
]

export const exempleDB = [
    {
        user: {
            name: 'CNN',
            userName: 'cnn',
            time: '7m',
            src: '/Tweet-Avatar/Profile-Photo-1.png'
        },
        content: {
            text: 'President Joe Biden touted a new agreement reached with the European Union to ease Trump-era tariffs on aluminum and steel as a "major breakthrough" that would serve to both strengthen the US steel industry and combat the global climate crisis.'
        },
        actions: {
            comments: 54,
            retweet: 144,
            like: 184
        }
    },
    {
        user: {
            name: 'The New York Times',
            userName: 'nytimes',
            time: '2h',
            src: '/Tweet-Avatar/Profile-Photo6.png'
        },
        content: {
            text: 'Gardening boomed during the pandemic. Six Black writers share how it has helped them re-establish, and reimagine, a connection to cultivation and the land',
            srcImage: '/images/image 3.png'
        },
        actions: {
            comments: 19,
            retweet: 48,
            like: 482
        }
    },
    {
        user: {
            name: 'Twitter',
            userName: 'twitter',
            time: 'Oct 29',
            src: '/Tweet-Avatar/Profile-Photo-2.png'
        },
        content: {
            text: 'BIG NEWS lol jk still Twitter',
        },
        actions: {
            comments: '6.8k',
            retweet: '36.8k',
            like: '267.1k'
        }
    },
    {
        user: {
            name: 'Twitter',
            userName: 'twitter',
            time: 'Oct 4',
            src: '/Tweet-Avatar/Profile-Photo-2.png'
        },
        content: {
            text: 'hello literally everyone',
        },
        actions: {
            comments: '118.7k',
            retweet: '785.4k',
            like: '3.3k'
        }
    },
    {
        user: {
            name: 'Twitter',
            userName: 'twitter',
            time: 'Oct 4',
            src: '/Tweet-Avatar/Profile-Photo-2.png'
        },
        content: {
            text: 'hello literally everyone',
            srcImage: '/images/image 3.png'
        },
        actions: {
            comments: '118.7k',
            retweet: '785.4k',
            like: '3.3k'
        }
    }
]