import emojiList from './emojiList.json';

export default function filterEmoji(searchText, maxResult){
    return emojiList.filter(emoji => {
        if(emoji.title.toLowerCase().includes(searchText.toLowerCase())){
            return true;
        }
        if(emoji.keywords.includes(searchText.toLowerCase())){
            return true;
        }
        return false;
    }).slice(0, maxResult);
}