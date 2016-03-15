

/**
 * @name  linkedListGenerator
 * @description  Main Module
 * @return {Object} an object exposing methods to be used to manipulate a linked list
 */
function linkedListGenerator(){

var head = null;
var tail = null;

  var module = {

    getHead : function getHead () {  
                return head;
              },
    getTail : function getTail () {
                return tail;
              },
    add : function add (value) {

            var newNode = {
              value : value,
              next : null
            }

            if (module.getHead() === null && module.getTail() === null) {
              head = newNode;
              tail = newNode;
            }
            else {
              tail.next = newNode;
              tail = newNode;
            }

            return tail;
    },

    remove : function remove (num) {
// urlArr = [
//         'news.ycombinator.com',
//         'mozilla.org',
//         'eff.org',
//         'icann.org'

                var previousNode = module.get(num-1);
                var nextNode = module.get(num+1);
                var deleteNode = module.get(num);


                if (deleteNode.next === null){
                  tail = previousNode;
                }
                else if (num === 0){
                  head = module.getHead().next;
                }
                else if (module.get(num) === false){
                  return false;
                }
                previousNode.next = nextNode;


    },
    get : function get (num) {
         
            var currentHead = module.getHead();
            var searched = 0;
            while (searched !== num){
              currentHead = currentHead.next;
              searched += 1;

              if (currentHead === null){
                return false;
              }
            }

           return currentHead; 

    },
    insert : function insert () {


    }


  }


  return module;

}