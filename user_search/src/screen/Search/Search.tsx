import React, { useCallback, useEffect, useState } from "react";
import { Desktop } from "@layouts";
import { Avatar, LinkButton, Card, Input, IconButton, Checkbox } from "@components";
import { getUsers, getUsersByName } from "@services/github";
import { getNextId } from "@utils";
import type { User, RateLimit } from "@types";

import "./Search.css";

export const Search = () => {
    const [usersList, setUsersList] = useState<Array<User>>([]);
    const [usersChecked, setUsersChecked] = useState<Array<User>>([]);
    const [isCheckAll, setIsCheckAll] = useState(false);
    const [totalCount, setTotalCount] = useState(0);
    const [rateLimitData, setRateLimitData] = useState<RateLimit | undefined>();
    const [rateLimitExceeded, setRateLimitExceeded] = useState(false);

    // Get all users API call and update states
    const getAllUsers = () => {
        getUsers().then(({ usersData, rateLimit}) => {
            setUsersList(usersData.data);
            setTotalCount(usersData.data.length);
            setRateLimitData(rateLimit);
        });
    };

    // First load, display all users by default
    useEffect(() => getAllUsers(), []);

    // Check if GitHub search endpoint rate limit has been exceeded
    useEffect(() => {
        if(rateLimitData?.used === rateLimitData?.limit) {
            setRateLimitExceeded(true);
            setTimeout(() => {
                setRateLimitExceeded(false);
            }, rateLimitData?.timeBeforeReset)
        }
    }, [rateLimitData]);

    const handleResetCheck = () => {
        setIsCheckAll(false);
        setUsersChecked([]);
    };

    // Handle Input component changes
    const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
        handleResetCheck();
        const { target: { value } } = e;

        // If input value is empty display all users as initial state
        if (value) {
            getUsersByName(value).then(({ usersData, rateLimit}) => {
                console.log(usersData?.data);
                setUsersList(usersData?.data.items);
                setTotalCount(usersData?.data.total_count);
                setRateLimitData(rateLimit);
            });
        } else {
            getAllUsers();
        }
    };

    const userIsChecked = (user: User) => {
        return usersChecked.includes(user);
    };

    // Handle toggle select users
    const handleCheckAll = () => {
        setIsCheckAll(!isCheckAll);
        setUsersChecked(isCheckAll ? [] : usersList);
    };

    // Handle toggle select one user
    const handleCheckOne = (user: User) => {
        if (userIsChecked(user)) {
            setUsersChecked(usersChecked.filter((userChecked => userChecked !== user)))
        } else {
            setUsersChecked(usersChecked.concat(user))
        }
    }

    // Handle duplicate selected users
    const handleDuplicate = useCallback(() => {
        const usersToDuplicate: User[] = [];

        let nextUserId = getNextId(usersList);

        // Prepare to duplicate user with new id
        for (const userChecked of usersChecked) {
            if (userChecked) {
                usersToDuplicate.push({
                    ...userChecked,
                    id: nextUserId
                });
            }
            nextUserId++;
        }

        setUsersList(usersList?.concat(...usersToDuplicate));
        handleResetCheck();
    }, [usersChecked, usersList]);

    // Handle delete selected users
    const handleDelete = useCallback(() => {
        setUsersList(usersList?.filter((user) => user && !usersChecked?.includes(user)));
        handleResetCheck();
    }, [usersChecked, usersList]);

    return(
        <Desktop title="Github Search">
            <div className="search__header">
                <div className="search__header--input">
                    <Input
                        type="text"
                        name="search"
                        placeholder="Search user"
                        onChange={handleChange}
                        disabled={rateLimitExceeded}
                    />
                </div>

                {rateLimitExceeded && (
                    <div className="search__header--alert">
                        <p>You reach the limit, please wait less one minute to search again users.</p>
                    </div>
                )}

                <div className="search__header--actions">
                    <div className="actions__row actions__row--left">
                        <Checkbox
                            checked={isCheckAll}
                            onClick={handleCheckAll}
                        />

                        <p><b>{usersChecked?.length}</b> elements selected</p>
                    </div>
                    <div className="actions__row actions__row--right">
                        <IconButton
                            srcIcon="https://img.icons8.com/ios-glyphs/30/null/duplicate.png"
                            altIcon="duplicate users"
                            onClick={handleDuplicate}
                            isDisabled={usersChecked.length === 0}
                        />
                        <IconButton
                            srcIcon="https://img.icons8.com/ios-glyphs/30/null/delete.png"
                            altIcon="delete users"
                            onClick={handleDelete}
                            isDisabled={usersChecked.length === 0}
                        />
                    </div>
                </div>
            </div>

            <div className={totalCount > 0 ? "search__body" : "search__body--no-result"}>
                {totalCount > 0 ? usersList?.map((user, index) => (
                    <div className="search__body--card" key={index}>
                        <Card>
                            <div className="user__card">
                                <div className="user__card--checkbox">
                                    <Checkbox
                                        checked={userIsChecked(user)}
                                        onClick={() => handleCheckOne(user)}
                                    />
                                </div>
                                <Avatar src={user?.avatar_url}/>

                                <div className="user__card--info">
                                    <p>{user?.id}</p>
                                    <p>{user?.login}</p>
                                </div>

                                <LinkButton
                                    label="View profile"
                                    href={user?.html_url}
                                    target="_blank"
                                    rel="noreferrer"
                                />
                            </div>
                        </Card>
                    </div>
                )) : (
                    <h2>No user found</h2>
                )}
            </div>
        </Desktop>
    )
}
