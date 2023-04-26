import { forwardRef } from 'react'
import { Form } from 'react-bootstrap'

export const Input = forwardRef(({
  name,
  label,
  error,
  type = 'text',
  ...props
}, ref) => (
    <div className="campo">
        <Form.Label htmlFor={ name }>
          { label }
        </Form.Label>
        <Form.Control
            type={ type }
            id={ name }
            name={name}
            {...props}
            ref={ref}
        />
        {error && <span>{error}</span>}
    </div>
))
