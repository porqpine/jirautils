var rootIssueUrl = "https://jira.atlassian.com/browse/";
var jql = "";
var maxResults = "15";
var themeRoot = "img/theme2";

var rootUrl = "https://jira.atlassian.com/rest/api/2/search?maxResults=";
var ICON_SET = {
    dependantIssue: themeRoot + "/issue_dependent.png",
    dependantIssue_done: themeRoot + "/issue_dependent_done.png",
    dependantIssue_in_progress: themeRoot + "/issue_dependent_in_progress.png",
    issue: themeRoot + "/issue.png",
    version: themeRoot + "/version.png",
    component: themeRoot + "/component.png",
    project: themeRoot + "/project.png",
    unknown_nodetype: themeRoot + "/unknown.png",
    locked: themeRoot + "/lock_closed.png",
    unlocked: themeRoot + "/lock_open.png",
    issue_done: themeRoot + "/issue_done.png",
    issue_in_progress: themeRoot + "/issue_in_progress.png"
};

var LINKS_TO_DRAW = ["Requires","Relates"];

var LINK_STYLES = {
    default: {
        stroke: 'rgba(100,100,100,0.3)',
        strokeWidth: 1,
        style:"1"
    },
    Requires: {
        stroke: 'rgba(150,150,150,0.4)',
        strokeWidth: 5,
        style:"0"
    },

    Relates: {
        stroke: 'rgba(150,150,150,0.4)',
        strokeWidth: 2,
        style:"2 1"
    },

    assignee: {
        stroke: 'rgba(255,0,255,0.3)',
        strokeWidth: 1,
        style:"2"
    },
    reporter: {
        stroke: 'rgba(255,0,255,0.3)',
        strokeWidth: 1,
        style:"2"
    },
    component: {
        stroke: 'rgba(100,100,250,0.3)',
        strokeWidth: 1,
        style:"2"
    },
    version: {
        stroke: 'rgba(150,200,0,0.3)',
        strokeWidth: 1,
        style:"2"
    }
};
