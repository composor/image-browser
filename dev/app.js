import {h} from 'composi'
import title from './components/title'
import List from './components/list'
import {buildData} from './components/list'

title.update()

const data = buildData(10)

const list = new List({
  container: 'section',
  state: data
})
