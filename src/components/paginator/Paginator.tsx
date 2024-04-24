import React, { FC } from "react"
import s from "./Paginator.module.css"

export const Paginator: FC<PaginatorPropsType> = ({ totalCount, pageSize, onPageChanged, currentPage }) => {
	let pagesCount = Math.ceil(totalCount / pageSize)
	let pages = Array(pagesCount)
		.fill(0)
		.map((_, i) => i + 1)
		.slice(
			Math.floor(currentPage / pageSize) <= 5 ? 0 : currentPage - 5,
			currentPage > totalCount - 4 ? totalCount + 1 : currentPage + 4,
		)

	return (
		<div className={s.paginationBlock}>
			<span style={{ color: "#b1e5e7", fontWeight: "bolder", fontSize: "18px", marginRight: "10px" }}>Page: </span>
			<span
				className={s.paginationSetting}
				onClick={() => onPageChanged(currentPage - 1000 <= 0 ? 1 : currentPage - 1000)}>
				{"-1000 "}
			</span>
			<span
				className={s.paginationSetting}
				onClick={() => onPageChanged(currentPage - 100 <= 0 ? 1 : currentPage - 100)}>
				{"-100 "}
			</span>
			<span className={s.paginationSetting} onClick={() => onPageChanged(currentPage - 10 <= 0 ? 1 : currentPage - 10)}>
				{"-10 "}
			</span>
			<span style={{ color: "#b1e5e7", fontWeight: "bolder" }}>{"<"}</span>
			{pages.map((i) => (
				<span
					key={i}
					className={i === currentPage ? `${s.selected} ${s.pages}` : s.pages}
					onClick={() => onPageChanged(i)}>
					{i}
				</span>
			))}
			<span style={{ color: "#b1e5e7", fontWeight: "bolder" }}>{">"}</span>
			<span
				className={s.paginationSetting}
				onClick={() =>
					onPageChanged(currentPage + 10 >= Math.ceil(totalCount / pageSize) ? pagesCount : currentPage + 10)
				}>
				{" +10 "}
			</span>
			<span
				className={s.paginationSetting}
				onClick={() =>
					onPageChanged(currentPage + 100 >= Math.ceil(totalCount / pageSize) ? pagesCount : currentPage + 100)
				}>
				{"+100 "}
			</span>
			<span
				className={s.paginationSetting}
				onClick={() =>
					onPageChanged(currentPage + 1000 >= Math.ceil(totalCount / pageSize) ? pagesCount : currentPage + 1000)
				}>
				{"+1000"}
			</span>
		</div>
	)
}
//types
type PaginatorPropsType = {
	totalCount: number
	pageSize: number
	currentPage: number
	onPageChanged: (pageNumber: number) => void
}
