import {render,screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event';

import Counter from './index'


describe("Counter Tests", () => {
    let increaseBtn, decreaseBtn, count;

    beforeEach(() => { // Önce bunu çalıştır. Sonra testi çalıştır. Sonra tekrar bunu çalıştır. Ardından yine sıradaki testi çalıştır. Her test çalışması sonlandığında bunu çalıştırıp sıradaki testleri çalıştırmaya devam et.
        console.log("Her testten önce çalışacağım");
        render(<Counter />);
        increaseBtn=screen.getByText("Increase")
        decreaseBtn=screen.getByText("Decrease")
        count=screen.getByText("0");
    })

    beforeAll(() => { // Bir kere ve her testten önce çalışır
        console.log("İlk başta bir kere çalışacağım.");
    })

    afterEach(() =>{
        console.log("Her testten sonra çalışacağım");
    })

    afterAll(() => {
        console.log("En son bir kere çalışacağım");
    })

    test("increase btn",()=>{
        userEvent.click(increaseBtn);
        expect(count).toHaveTextContent("1");
    })
    
    test("decrease btn",()=>{
        userEvent.click(decreaseBtn);
        expect(count).toHaveTextContent("-1");
    })
})

