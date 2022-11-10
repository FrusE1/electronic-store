import React from 'react';
import propTypes from 'prop-types';
import { withNaming } from "@bem-react/classname";
import modal from '../../store/modal/actions';
import './style.css';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

function LayoutModal({ children }) {

  const bem = withNaming({ e: '__' })
  const cn = bem('Layout-modal');

  const dispatch = useDispatch();

  function closeModal() {
    dispatch(modal.close())
  }

  useEffect(() => {
    document.body.style.overflow = 'hidden';

    return function () {
      document.body.style.overflow = 'auto';
    }
  })

  return (
    <div className={cn()} onClick={closeModal}>
      <div className={cn('content')} onClick={(e) => e.stopPropagation()}>
        <div className={cn('head')}>
          <div className={cn('close')} onClick={closeModal}>X</div>
        </div>
        {children}
      </div>
    </div>
  )
}

LayoutModal.propTypes = {
  children: propTypes.node.isRequired
}

export default React.memo(LayoutModal);