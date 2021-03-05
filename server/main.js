import {Meteor} from 'meteor/meteor';

import {Articles} from '../imports/api/articles/articles'

Meteor.publish('articles.all.titles', function (aString) {
    return Articles.find({theme: aString}, {fields: {title: 1}});
})

Meteor.startup(() => {
    // code to run on server at startup
    Articles.insert({name: 'New Article about Life', theme: 'Life'})
});
