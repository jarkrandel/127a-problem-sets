var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "probset-6-127a",
  "level": "1",
  "url": "#probset-6-127a",
  "type": "Article",
  "number": "",
  "title": "Problem Set 6",
  "body": " Problem Set 6    MAT 127A SQ 2026  Due Friday, May 22nd at 11:59PM      Problems    Abbott Exercise 3.2.11(a). Prove that .   It suffices to prove that , where is the set of limit points of for any . The inclusion of the right-hand side in the left should be clear from the definition. For the other direction, notice that if has points of arbitrarily close, it must have points of either or arbitrarily close.     Abbott Exercise 3.3.1. Show that if is compact and nonempty, then and both exist and are elements of .       Prove that if and , then .  Use part (a) to help you complete Abbott Exercise 3.3.8(a) : let and be nonempty compact sets, and define . If and are disjoint, show and that for some and .    For part (a), use the right form of the triangle inequality. For part (b), take a sequence of points converging to the infimum, and use compactness to extract associated convergent subsequences of points in and whose limits achieve the infimum.     Let be a finite set. You may assume that   where .   Prove that is compact using the definition directly.  Prove that is compact by showing that it is closed and bounded.  Prove that is compact by showing that every open subcover of has a finite subcover.    For part (a), if you have infinitely many items and only finitely many boxes to put them in, then one box must contain infinitely many items. For part (b), you can use the definition of closed directly or use the characterization of closed sets as complements of open sets. The latter is easier here.     Optional. Complete either of the following Abbott exercises, or both.  Abbott Exercise 3.3.9. Assume satisfies the sequence and closed-bounded conditions from Theorem 3.3.8, and let be an open cover for . For contradiction, assume that no finite subcover exists. Let be a closed interval containing .   Show that there exists a nested sequence of closed intervals such that, for each , cannot be finitely covered and .  Argue that there exists an such that for all .  Because , there must exist an open set from the original collection that contains . Explain how this leads to the desired contradiction.   Abbott Exercise 3.3.10. Consider the special case where is a closed interval. Let be an open cover for and define to be the set of all such that has a finite subcover from .   Argue that is nonempty and bounded, and thus exists.  Show that , which implies has a finite subcover.  Finally, prove the theorem for an arbitrary closed and bounded set .       Optional. Abbott Exercise 3.3.13. Let us call a set clompact if it has the property that every closed cover, meaning a cover consisting of closed sets, admits a finite subcover. Describe all of the clompact subsets of .     "
},
{
  "id": "ps6-prob1",
  "level": "2",
  "url": "#ps6-prob1",
  "type": "Problem",
  "number": "1",
  "title": "",
  "body": "  Abbott Exercise 3.2.11(a). Prove that .   It suffices to prove that , where is the set of limit points of for any . The inclusion of the right-hand side in the left should be clear from the definition. For the other direction, notice that if has points of arbitrarily close, it must have points of either or arbitrarily close.  "
},
{
  "id": "ps6-prob2",
  "level": "2",
  "url": "#ps6-prob2",
  "type": "Problem",
  "number": "2",
  "title": "",
  "body": "  Abbott Exercise 3.3.1. Show that if is compact and nonempty, then and both exist and are elements of .   "
},
{
  "id": "ps6-prob3",
  "level": "2",
  "url": "#ps6-prob3",
  "type": "Problem",
  "number": "3",
  "title": "",
  "body": "   Prove that if and , then .  Use part (a) to help you complete Abbott Exercise 3.3.8(a) : let and be nonempty compact sets, and define . If and are disjoint, show and that for some and .    For part (a), use the right form of the triangle inequality. For part (b), take a sequence of points converging to the infimum, and use compactness to extract associated convergent subsequences of points in and whose limits achieve the infimum.  "
},
{
  "id": "ps6-prob4",
  "level": "2",
  "url": "#ps6-prob4",
  "type": "Problem",
  "number": "4",
  "title": "",
  "body": "  Let be a finite set. You may assume that   where .   Prove that is compact using the definition directly.  Prove that is compact by showing that it is closed and bounded.  Prove that is compact by showing that every open subcover of has a finite subcover.    For part (a), if you have infinitely many items and only finitely many boxes to put them in, then one box must contain infinitely many items. For part (b), you can use the definition of closed directly or use the characterization of closed sets as complements of open sets. The latter is easier here.  "
},
{
  "id": "ps6-prob5",
  "level": "2",
  "url": "#ps6-prob5",
  "type": "Problem",
  "number": "5",
  "title": "",
  "body": "  Optional. Complete either of the following Abbott exercises, or both.  Abbott Exercise 3.3.9. Assume satisfies the sequence and closed-bounded conditions from Theorem 3.3.8, and let be an open cover for . For contradiction, assume that no finite subcover exists. Let be a closed interval containing .   Show that there exists a nested sequence of closed intervals such that, for each , cannot be finitely covered and .  Argue that there exists an such that for all .  Because , there must exist an open set from the original collection that contains . Explain how this leads to the desired contradiction.   Abbott Exercise 3.3.10. Consider the special case where is a closed interval. Let be an open cover for and define to be the set of all such that has a finite subcover from .   Argue that is nonempty and bounded, and thus exists.  Show that , which implies has a finite subcover.  Finally, prove the theorem for an arbitrary closed and bounded set .    "
},
{
  "id": "ps6-prob6",
  "level": "2",
  "url": "#ps6-prob6",
  "type": "Problem",
  "number": "6",
  "title": "",
  "body": "  Optional. Abbott Exercise 3.3.13. Let us call a set clompact if it has the property that every closed cover, meaning a cover consisting of closed sets, admits a finite subcover. Describe all of the clompact subsets of .   "
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
