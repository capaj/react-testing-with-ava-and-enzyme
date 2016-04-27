import test from 'ava'

test(t => {
  t.is(1, 1)
  t.pass('passes')
  t.truthy('this passes too')
  t.true(true)
  t.not(1, 2)
  t.false(false)
  t.deepEqual([1, 2], [1, 2])
  t.notDeepEqual([1, 2], [1, 3])
  t.throws(() => {
    throw new Error('omg such error')
  })
  t.notThrows(() => {

  })
  t.regex('such string', /ch s/)
  t.fail('fail')
})
