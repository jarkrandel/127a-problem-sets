var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "probset-5-127a",
  "level": "1",
  "url": "#probset-5-127a",
  "type": "Article",
  "number": "",
  "title": "Problem Set 5",
  "body": " Problem Set 5    MAT 127A SQ 2026  Due Friday, May 15th at 11:59PM      Problems    Abbott Exercise 3.2.2. Let and . Answer the following questions for each set. You do not have to prove your claims; just answering the questions is enough.   What are the limit points?  Is the set open? Closed?  Does the set contain any isolated points?  Find the closure of the set.       Abbott Exercise 3.2.5. Prove Theorem 3.2.8: a set is closed if and only if every Cauchy sequence contained in has a limit that is also an element of .      Abbott Exercise 3.2.7. Given , let be the set of all limit points of .   Show that the set is closed.  Argue that if is a limit point of , then is a limit point of . Use this observation to furnish a proof of Theorem 3.2.12.    Think carefully about what is being asked. A picture might help you see what is going on, and using the limit-point definition of closed set directly is a nice way to do this.     Neighborhoods of points are a special case of neighborhoods of sets . Let be nonempty. For any , define the distance of to by   If is finite, this is just the minimal distance of to a point in . Given , use this to define the open -neighborhood of by    Show that if is such that , then there exists such that .  Prove that is open.    For part (b), you can use the element of from part (a) to estimate the distance from points in a neighborhood of to .     Optional. Prove that any finite set consists entirely of isolated points.      Optional. Abbott Exercise 3.2.13. Prove that the only sets that are both open and closed are and the empty set .     "
},
{
  "id": "ps5-prob1",
  "level": "2",
  "url": "#ps5-prob1",
  "type": "Problem",
  "number": "1",
  "title": "",
  "body": "  Abbott Exercise 3.2.2. Let and . Answer the following questions for each set. You do not have to prove your claims; just answering the questions is enough.   What are the limit points?  Is the set open? Closed?  Does the set contain any isolated points?  Find the closure of the set.    "
},
{
  "id": "ps5-prob2",
  "level": "2",
  "url": "#ps5-prob2",
  "type": "Problem",
  "number": "2",
  "title": "",
  "body": "  Abbott Exercise 3.2.5. Prove Theorem 3.2.8: a set is closed if and only if every Cauchy sequence contained in has a limit that is also an element of .   "
},
{
  "id": "ps5-prob3",
  "level": "2",
  "url": "#ps5-prob3",
  "type": "Problem",
  "number": "3",
  "title": "",
  "body": "  Abbott Exercise 3.2.7. Given , let be the set of all limit points of .   Show that the set is closed.  Argue that if is a limit point of , then is a limit point of . Use this observation to furnish a proof of Theorem 3.2.12.    Think carefully about what is being asked. A picture might help you see what is going on, and using the limit-point definition of closed set directly is a nice way to do this.  "
},
{
  "id": "ps5-prob4",
  "level": "2",
  "url": "#ps5-prob4",
  "type": "Problem",
  "number": "4",
  "title": "",
  "body": "  Neighborhoods of points are a special case of neighborhoods of sets . Let be nonempty. For any , define the distance of to by   If is finite, this is just the minimal distance of to a point in . Given , use this to define the open -neighborhood of by    Show that if is such that , then there exists such that .  Prove that is open.    For part (b), you can use the element of from part (a) to estimate the distance from points in a neighborhood of to .  "
},
{
  "id": "ps5-prob5",
  "level": "2",
  "url": "#ps5-prob5",
  "type": "Problem",
  "number": "5",
  "title": "",
  "body": "  Optional. Prove that any finite set consists entirely of isolated points.   "
},
{
  "id": "ps5-prob6",
  "level": "2",
  "url": "#ps5-prob6",
  "type": "Problem",
  "number": "6",
  "title": "",
  "body": "  Optional. Abbott Exercise 3.2.13. Prove that the only sets that are both open and closed are and the empty set .   "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
