import cssContainer from './container.module.css';
const Container = (props) => {
   return (
      <div className={cssContainer.container}>
         {props.message}
      </div>
   )
}

export default Container;