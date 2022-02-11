// IMPORT MODULES under test here:
// import { example } from '../example.js';

const test = QUnit.test;

test('time to test a function', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = '<div class="album"><h3>Morning / Evening</h3><img src="assets/1.jpg" class="Album-art"><p>2015, 2 tracks</p></div>';
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = true;

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('time to test a function', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = `<div class="album" id="album"><h2>Morning / Evening</h2><h4>2015</h4><img src="/assets/1.jpg"><ol><li>Morning Side</li><li>Evening Side</li></ol></div>`;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = true;

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});
