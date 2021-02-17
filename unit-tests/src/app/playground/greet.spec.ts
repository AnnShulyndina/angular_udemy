import {greet} from "./greed";

describe('greet', ()=>{
  it('should include name in return message', ()=>{
    expect(greet('Angular')).toContain('Angular')
  })

})
