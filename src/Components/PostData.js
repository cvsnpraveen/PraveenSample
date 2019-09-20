import React from 'react';

export const PostData = ({ taskInfo, type }) => (
    <div className={`alert ${type} fade in alert-dismissible show`}>
        <button type="button" className="close" data-dismiss="alert" aria-label="Close">
            <span aria-hidden="true">×</span>
        </button>
        <strong>{taskInfo.taskTitle}</strong> on {taskInfo.schedule}
    </div>
)