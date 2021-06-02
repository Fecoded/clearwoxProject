import toastr from 'toastr'

const Alert = (msg, type) => {
    toastr.options = {
        timeOut: 3000,
        progressBar: true,
        showMethod: "slideDown",
        hideMethod: "slideUp",
        showDuration: 200,
        hideDuration: 200
    };
    
    if(type === 'success'){
        toastr.success(msg);
    } else {
        toastr.error(msg);
    }

}

export default Alert


// toastr.info('This is an informational message');

// toastr.warning('You are currently not authorized');