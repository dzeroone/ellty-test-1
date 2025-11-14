import { useMemo, useState } from 'react'
import './App.css'
import { Button } from './components/ui/button'
import { Checkbox } from './components/ui/checkbox'
import { Separator } from './components/ui/separator'

function App() {
  const [items, setItems] = useState([
    {title: "Page 1", checked: false},
    {title: "Page 2", checked: false},
    {title: "Page 3", checked: false},
    {title: "Page 4", checked: false},
    {title: "Page 5", checked: false}
  ])

  const allSelectedStatus = useMemo(() => {
    const checkedCount = items.filter(item => item.checked).length
    return checkedCount ? checkedCount == items.length ? true : "indeterminate" : false
  }, [items])

  const updateAllItemChecked = (checked: boolean) => {
    setItems(s => {
      return [...s].map(item => {
        item.checked = checked
        return item
      })
    })
  }

  const updateItemChecked = (index: number, checked: boolean) => {
    setItems(s => {
      const newState = [...s]
      newState[index].checked = checked
      return newState
    })
  }


  return (
    <div className='p-10 flex justify-center'>
      <div className='flex flex-col gap-2.5 py-2.5 w-md rounded-md border shadow'>
        <div className='group flex justify-between items-center px-4' onClick={() => updateAllItemChecked(allSelectedStatus == 'indeterminate' ? true : !allSelectedStatus)}>
          <div>All pages</div>
          <Checkbox checked={allSelectedStatus} />
        </div>
        <div className='px-4'>
          <Separator />
        </div>
        <div>
          {items.map((item, i) => {
            return (
              <Item title={item.title} checked={item.checked} onCheckedChange={(v) => updateItemChecked(i, v)} />
            )
          })}
        </div>
        <div className='px-4'>
          <Separator />
        </div>
        <div className='px-4 py-4.5'>
          <Button className='w-full uppercase'>Done</Button>
        </div>
      </div>
    </div>
  )
}

function Item({
  title,
  checked,
  onCheckedChange
}: {
  title: String,
  checked: boolean,
  onCheckedChange: (value: boolean) => void
}) {
  return (
    <div className='group cursor-pointer flex justify-between items-center px-4 py-2' onClick={() => onCheckedChange(!checked)}>
      <div>{title}</div>
      <Checkbox checked={checked} />
    </div>
  )
}

export default App
