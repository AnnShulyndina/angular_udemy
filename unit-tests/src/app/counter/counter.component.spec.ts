import {CounterComponent} from "./counter.component";

describe('CounterComponent', () => {
  let component: CounterComponent

  beforeEach(() => {
    component = new CounterComponent()
  })
//beforeAll, afterEach, afterAll

  it('should increment counter by 1 ', () => {
    component.increment()
    expect(component.counter).toBe(1)
  })
  //xit - skip this test
  it('should increment counter by 1 ', () => {
    component.decrement()
    expect(component.counter).toBe(-1)
  })
})
