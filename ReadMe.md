
**Gilded Rose Refactor**

This is my refactor of gilded rose in JavaScript. The orignal version was essentially the worst possible way to do this, so improving upon it wasn't all that difficult. I'll list what I saw as the major problems with the orignal version, then explain how I went about improving upon it.

*Notes to the Goblin*
I'm not going to modify your item class or properties because I don't want to be one shotted, but I am going to move the item class away from its current home. This was not explicitly prohibited in the rules, so you can't one shot me for it. 

**Problems with Original (not necessarily comprehensive, I could've missed something.)**

1. Super difficult to read. This was the first thought that entered my mind upon seeing the orignal code. Code that is hard to read is hard to work on because you waste a lot of time trying to figure out what's going on. The difficulty in reading the code is mostly due to the massive number of nested conditionals. 

2. Unnecessarily redundant. This is because the original makes no distinction between item types and simply runs the same upDateQuality method on all items. This approach leads to repetetive checks that could be avoided if unique items were treated differently. Inheritance is a thing for a reason.

3. Difficult to add new items in the future. Since all the distinctions between items are made in the upDateQuality function, adding a new item to the inventory requires modifying that function. This will inevitably lead to a mess.

4. Difficult to write tests for. Since I'm going to be making drastic changes anyway, I'm not going to write tests for the original version. 

----

**Solutions to the Above**

I'm primarily a React developer, so splitting things into smaller chunks is the first place my mind went when it came to improving this. I absolutely had to get rid of the monstrous updateQuality funtion, or at least break it into smaller pieces. Once code is easy to read it becomes much easier to make further improvements. 



For the above reason, I decided to fix the existing problems before adding a new feature.

To start improving this, I went ahead and made a new folder called `items`. I then moved the item class from the main gilded rose file to its own file, `item.js`. 

Having moved Item to its new home, I created an additional file in in the `items` folder for each of the non-standard item types. These unique items extend the generic item class. 

After getting things to the point where they were easy to work with the rest of the solution was blatantly obvious: 

*Give each class of item its own unique update function, then call those functions from updateQuality* 

For this approach to work, `updateQuality` would require access to the individual `update` functions within each item file. To facilitate this access I created one more file in the `items` folder, calling it `itemlist.js`. This file is extremely simple; all it does is require the various item types, then bundle them together for export to the main `gilded-rose.js` file. 

Moving all of the increment logic to the individual update functions means that the `updateQuality` function can be cut down to just a few lines.

  That looks a lot better than the monster we started with, but is it actually better? 

  *Yes* 

  **Here are some the benefits of this refactor:**

  1. Readability is greatly increased, making the code much easier to work on. This is obvious.

  2. Now that the different item types are separated, adding new items (enchanted?) is easy and requires no changes to `updateQuality`. To add a new type of item in the future all we have to do is a create a new file within `items`, where we can easily create a unique update function for it. 

  3. Increased efficiency. Now that we're not calling an extremely long function on each item every time we update, the runtime is significantly improved. While efficiency isn't important at this small of a scale, it becomes extremely important on larger scales. 

  4. Much easier to write tests for. By breaking up the original monster updateQuality function, we make it easier to implement tests using our library of choice.

  5. Literally everything is better. I don't have time to describe it all for this exercise. Look at code comments. 

  **But are we still getting the correct answers?**

  This is a legitimate question, especially since I decided not to write tests for the original version. However, we have the rules, so we can write tests for the refactored version using our tool of choice. I'm a React developer, so that tool is Jest. I know it's weird to use with vanilla JS, but we're doing it. 

  Let's review the rules:

  	All items have a SellIn value which denotes the number of days we have to sell the item
	All items have a Quality value which denotes how valuable the item is
	At the end of each day our system lowers both values for every item

    Once the sell by date has passed, Quality degrades twice as fast
	The Quality of an item is never negative

	"Aged Brie" actually increases in Quality the older it gets
	The Quality of an item is never more than 50
	"Sulfuras", being a legendary item, never has to be sold or decreases in Quality

	"Backstage passes", like aged brie, increases in Quality as its SellIn value approaches;
	Quality increases by 2 when there are 10 days or less and by 3 when there are 5 days or less but
	Quality drops to 0 after the concert


    "Conjured" items degrade in Quality twice as fast as normal items

Clearly we're going to need a significant number of tests. I think a bakers dozen (13 is lucky, right?) should cover it. 

Unforutnately I'm out of time, sp I can't detail the tests in this ReadMe, but please have a look at `gilded_rose.test.js` to see them in action. 

Alternatively, you could run the below commands:

```npm run test``` to run the tests

```npm run test:watch``` to watch the tests in action (best choice, there's an easter egg). 

```npm run test:coverage``` to check out the code coverage.

As you should see, all 13 of our tests pass, so it looks like the rules are indeed being followed.

**Final Thoughts and Things I'd do with More Time**

This was an interesting exercise and was very different from other take homes I've seen in the past. I probably irritated the goblin by moving the item class, but moving is not modifying. 

Were I to have additional time here's what I'd do:

1. More tests to make sure all edge cases are caught. 
2. Use React to build an actual web store for Gilded Rose. 













