package com.example.Task.Tracker.repository;

import com.example.Task.Tracker.model.Habitos;
import com.example.Task.Tracker.model.HabitosHistoricos;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface HabitoHistoricoRepository extends JpaRepository<HabitosHistoricos, Long> {

    @Query("SELECT hh FROM HabitosHistoricos hh WHERE hh.habitos_id = :id_habito")
    List<HabitosHistoricos> findByHabitoId(@Param("id_habito") Integer id_habito);
}
