function wrappedData(WrappedComponent){
    return function withLoaderComponent({isloading,...props}){
        if(isloading)
            return <div>Loding....</div>
            return <WrappedComponent {...props}/>
    }
}



export default wrappedData