
function Validator(formSelector) {

    var _this = this;
    function getParent(element, selector) {

        while (element.parentElement) {
            if (element.parentElement.matches(selector)) {
                return element.parentElement
            }
            element = element.parentElement
        }

    }

    /**
     * Rules:
     * - Error: return `error message`
     * - Non-error: return `undefined`
     */


    var formRules = {}
    var validatorRules = {
        required: function (value) {
            return value ? undefined : 'Vui lòng nhập trường này'
        },
        email: function (value) {
            var regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
            return regex.test(value) ? undefined : 'Vui lòng nhập email'
        },
        min: function (min) {
            return function (value) {
                return value.length >= min ? undefined : `Vui lòng nhập tối thiếu ${min} ký tự`
            }
        },
        max: function (max) {
            return function (value) {
                return value.length <= max ? undefined : `Số ký tự tối đa là ${min}`
            }
        },
        hasToChecked: function (value) {
            return value === "male" ||  value === "female" || value === "other"  ? undefined : 'Vui lòng chọn ít nhất một tùy chọn'
        }
    }

    // Take form element from DOM by `formSelector`
    var formElement = document.querySelector(formSelector);

    if (formElement) {

        var inputs = formElement.querySelectorAll('[name][rules]')
        for (var input of inputs) {

            var rules = input.getAttribute('rules').split('|')

            for (rule of rules) {

                var ruleFunc = validatorRules[rule]
                var isRuleHasValue = rule.includes(':')

                if (isRuleHasValue) {
                    var ruleInfo = rule.split(':')

                    ruleFunc = validatorRules[ruleInfo[0]]
                    ruleFunc = ruleFunc(ruleInfo[1])
                }

                if (Array.isArray(formRules[input.name])) {
                    if (formRules[input.name].every(func => func !== ruleFunc)) {
                        formRules[input.name].push(ruleFunc)
                    }
                } else {
                    formRules[input.name] = [ruleFunc]
                }
            }

            // Events listen onchange

            input.onblur = handleValidate
            input.oninput = handleClearError
        }

        // Validation function
        function handleValidate(e) {
            var rules = formRules[e.target.name]
            console.log(e.target.name)
            var errorMessage
            for (var rule of rules) {
                switch (e.target.type) {
                    case 'checkbox':
                    case 'radio':

                        
                        errorMessage = rule(e.target.value);
                        break
                    default:
                        errorMessage = rule(e.target.value)
                }
                if (errorMessage) break

            }


            // Send error message when error is found
            if (errorMessage) {
                var formGroup = getParent(e.target, '.form-group')
                if (formGroup) {
                    formGroup.classList.add('invalid')
                    var formMessage = formGroup.querySelector('.form-message')
                    if (formMessage) {
                        formMessage.innerText = errorMessage
                    }
                }
            }

            return errorMessage
        }


        // Clear error message function
        function handleClearError(e) {
            var formGroup = getParent(e.target, '.form-group')
            if (formGroup.classList.contains('invalid')) {
                formGroup.classList.remove('invalid')
            }

            var formMessage = formGroup.querySelector('.form-message')
            if (formMessage) {
                formMessage.innerText = ''
            }
        }
    }


    // Handle submit form action
    formElement.onsubmit = function (e) {
        e.preventDefault()
        var isValid = true
        var inputs = formElement.querySelectorAll('[name][rules]')
        for (var [index, input] of inputs.entries()) {

            if (input.type === 'checkbox' || input.type === 'radio') {
                
                if (index > 0 && isValid === true && input.name === inputs[--index].name) {
                    continue
                }
                if (!handleValidate({ target: input })) {
                    isValid = true
                    handleClearError({ target: input })
                }
            }
            
            if (handleValidate({ target: input })) {
                isValid = false
            }
        }


        // Submit when form is valid
        if (isValid) {
            if (typeof _this.onSubmit === 'function') {

                var enableInputs = formElement.querySelectorAll('[name]')

                var formValues = Array.from(enableInputs).reduce(function (values, input) {

                    switch (input.type) {
                        case 'checkbox':
                            if (!Array.isArray(values[input.name])) values[input.name] = []
                            if (input.matches(':checked')) values[input.name].push(input.value)
                            break
                        case 'radio':
                            if (input.matches(':checked')) values[input.name] = input.value
                            break
                        case 'file':
                            values[input.name] = input.files
                            break
                        default:
                            values[input.name] = input.value
                    }

                    return values
                }, {})

                _this.onSubmit(formValues)
            } else {

                // formElement.submit()
                console.log('Default');
            }
        }
    }
}