import {Template} from 'meteor/templating';

import {Articles} from '../imports/api/articles/articles';

import './main.html';



Template.ArticleList.onCreated(function () {
    //Articles.insert({title: new Date().toString()});
    this.subscribe('articles.all.titles', 'Life')
});

Template.ArticleList.helpers({
    date(){
        return new Date();
    },
    articles() {
        return Articles.find().fetch();
    }
})